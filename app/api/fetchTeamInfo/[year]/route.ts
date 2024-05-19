import prisma from '@/prisma/client';
import type { Member } from '@prisma/client';

export async function GET(
	request: Request,
	{ params }: { params: { year: string } }
) {
	try {
		const currentDate = new Date();
		let queryYear;

		switch (params.year) {
			case 'alumni':
				queryYear = calculateGradYear(
					currentDate,
					params.year === 'alumni' ? -1 : 0
				);
				break;
			case 'executives':
				queryYear = calculateGradYear(currentDate, 0);
				break;
			case '4':
				queryYear = calculateGradYear(currentDate, 0);
				break;
			case '3':
				queryYear = calculateGradYear(currentDate, 1);
				break;
			case '2':
				queryYear = calculateGradYear(currentDate, 2);
				break;
			case '1':
				queryYear = calculateGradYear(currentDate, 3);
				break;
			default:
				return new Response(JSON.stringify({ error: 'Invalid year' }), {
					status: 400,
				});
		}

		const members: Member[] = await prisma.member.findMany({
			where: { gradYear: queryYear },
			orderBy: { name: 'asc' },
		});

		if (params.year === 'executives') {
			const quantaIds = members.map((member) => member.quantaId);
			let executivesIds = (
				await prisma.postHolder.findMany({
					where: {
						quantaId: {
							in: quantaIds,
						},
					},
				})
			).map((executive) => executive.quantaId);

			const executives = members.filter((member) => {
				return executivesIds.includes(member.quantaId);
			}, {});

			return new Response(JSON.stringify({ members: executives }), {
				headers: { 'Content-Type': 'application/json' },
			});
		}

		return new Response(JSON.stringify({ members }), {
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		return new Response(
			JSON.stringify({ error: 'Internal server error' }),
			{ status: 500 }
		);
	}
}

function calculateGradYear(currentDate: Date, addYears: number) {
	const year = currentDate.getFullYear();
	if (currentDate.getMonth() <= 6) {
		return year + addYears;
	} else {
		return year + addYears + 1;
	}
}
