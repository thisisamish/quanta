import prisma from '@/prisma/client';

export async function POST(request: Request) {
	try {
		const data = await request.json();

		await prisma.event.create({ data: data });

		return new Response(
			JSON.stringify({ msg: 'Event was successfully created!' }),
			{
				status: 201,
				headers: { 'Content-Type': 'application/json' },
			}
		);
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
