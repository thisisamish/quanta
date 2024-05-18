import prisma from '@/prisma/client';
import type { Admin } from '@prisma/client';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
	try {
		const data = await request.json();

		const saltRounds = 10;
		bcrypt.genSalt(saltRounds, (err, salt) => {
			if (err) {
				return new Response(
					JSON.stringify({ error: 'Internal server error' }),
					{ status: 500 }
				);
			}
			const userPassword = data.password;
			bcrypt.hash(userPassword, salt, async (err, hash) => {
				if (err) {
					return new Response(
						JSON.stringify({ error: 'Internal server error' }),
						{ status: 500 }
					);
				}

				const admin: Admin = await prisma.admin.create({
					data: { username: data.username, password: hash },
				});

				if (!admin) {
					return new Response(
						JSON.stringify({ error: 'Internal server error' }),
						{ status: 500 }
					);
				}

				return new Response(
					JSON.stringify({ msg: 'Admin was successfully created!' }),
					{
						headers: { 'Content-Type': 'application/json' },
					}
				);
			});
		});
	} catch (error) {
		return new Response(
			JSON.stringify({ error: 'Internal server error' }),
			{ status: 500 }
		);
	}
}
