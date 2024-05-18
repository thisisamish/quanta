import prisma from '@/prisma/client';
import type { Admin } from '@prisma/client';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
	try {
		const data = await request.json();

		const admin: Admin | null = await prisma.admin.findUnique({
			where: { username: data.username },
		});

		if (!admin) {
			return new Response(
				JSON.stringify({ error: 'Username not found' }),
				{
					status: 404,
					headers: { 'Content-Type': 'application/json' },
				}
			);
		}

		const isPasswordValid = await bcrypt.compare(
			data.password,
			admin.password
		);

		if (isPasswordValid) {
			return new Response(JSON.stringify({ msg: 'Login Success!' }), {
				status: 200,
				headers: { 'Content-Type': 'application/json' },
			});
		} else {
			return new Response(
				JSON.stringify({ error: 'Invalid credentials' }),
				{
					status: 401,
					headers: { 'Content-Type': 'application/json' },
				}
			);
		}
	} catch (error) {
		console.error('Login error:', error);

		return new Response(
			JSON.stringify({ error: 'Internal server error' }),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			}
		);
	}
}
