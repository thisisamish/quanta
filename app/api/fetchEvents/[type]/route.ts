import prisma from '@/prisma/client';
import type { Event } from '@prisma/client';

export async function GET(
	request: Request,
	{ params }: { params: { type: string } }
) {
	try {
		const type = params.type;
		let eventActive: boolean = true;
		type === 'Upcoming' ? (eventActive = true) : (eventActive = false);

		const events: Event[] = await prisma.event.findMany({
			where: { active: eventActive },
		});

		return new Response(JSON.stringify({ events }), {
			status: 201,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		// Log error for server-side debugging
		console.error('Failed to create event:', error);

		return new Response(
			JSON.stringify({ error: 'Internal server error' }),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			}
		);
	}
}
