import prisma from '@/prisma/client';
import type { SocialLink } from '@prisma/client';

export async function POST(request: Request) {
	try {
		const data = await request.json();
		const sociallinks: SocialLink = await prisma.socialLink.create({
			data: data,
		});

		return new Response(JSON.stringify({ sociallinks }), {
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		return new Response(
			JSON.stringify({ error: 'Internal server error' }),
			{ status: 500 }
		);
	}
}
