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
			return new Response(JSON.stringify({ error: 'Bad request' }), {
				status: 400,
			});
		}

		const storedHashedPassword = admin.password;
		const userInputPassword = data.password;

		bcrypt.compare(
			userInputPassword,
			storedHashedPassword,
			(err, result) => {
				if (err) {
					return new Response(
						JSON.stringify({ error: 'Internal server error' }),
						{ status: 500 }
					);
				}

				if (result) {
					return new Response(
						JSON.stringify({ msg: 'LOGIN SUCCESS' }),
						{
							headers: { 'Content-Type': 'application/json' },
						}
					);
				} else {
					return new Response(
						JSON.stringify({ error: 'Internal server error' }),
						{ status: 500 }
					);
				}
			}
		);
	} catch (error) {
		return new Response(
			JSON.stringify({ error: 'Internal server error' }),
			{ status: 500 }
		);
	}
}
