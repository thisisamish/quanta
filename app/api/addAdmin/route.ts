import prisma from '@/prisma/client';
import type { Admin } from '@prisma/client';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
	try {
		const data = await request.json();

		const saltRounds = 10;
		const salt = await bcrypt.genSalt(saltRounds);
		const hash = await bcrypt.hash(data.password, salt);

		const admin: Admin = await prisma.admin.create({
			data: {
				username: data.username,
				password: hash,
			},
		});

		return new Response(
			JSON.stringify({ msg: 'Admin was successfully created!' }),
			{
				status: 201,
				headers: { 'Content-Type': 'application/json' },
			}
		);
	} catch (error) {
		// Log error for server-side debugging
		console.error('Failed to create admin:', error);

		return new Response(
			JSON.stringify({ error: 'Internal server error' }),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			}
		);
	}
}
