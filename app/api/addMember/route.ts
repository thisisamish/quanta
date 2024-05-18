import prisma from '@/prisma/client';
import type { Member } from '@prisma/client';

export async function POST(request: Request) {
	try {
		const data = await request.json();
		const member: Member = await prisma.member.create({ data: data });

		return new Response(JSON.stringify({ member }), {
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		return new Response(
			JSON.stringify({ error: 'Internal server error' }),
			{ status: 500 }
		);
	}
}
