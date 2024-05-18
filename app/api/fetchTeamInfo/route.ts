import prisma from '@/prisma/client';
import type { Member } from '@prisma/client';

export async function GET() {
	try {
		const members: Member[] = await prisma.member.findMany({
			orderBy: { name: 'asc' },
		});

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

export const revalidate = 86400;
