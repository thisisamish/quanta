'use client';

import { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface LoginData {
	username: string;
	password: string;
}

export default function AdminPage() {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const router = useRouter();

	const handleLogin = async (event: FormEvent) => {
		event.preventDefault();

		const loginData: LoginData = {
			username,
			password,
		};

		try {
			const response = await fetch('/api/auth', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(loginData),
			});

			if (!response.ok) {
				throw new Error('Failed to login');
			}

			const data = await response.json();
			toast.success('Login successful!');
			router.push('/admin/dashboard');
		} catch (error) {
			toast.error('Login failed!');
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-background">
			<Toaster position="bottom-right" reverseOrder={false} />
			<div className="p-6 bg-background shadow-md rounded-lg border-white border">
				<h2 className="text-lg font-semibold text-center mb-6">
					Admin Login
				</h2>
				<form className="text-black" onSubmit={handleLogin}>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700"
						>
							Username
						</label>
						<input
							type="text"
							id="email"
							name="email"
							required
							value={username} // Bind input to state
							onChange={(e) => setUsername(e.target.value)} // Update state on change
							className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							required
							value={password} // Bind input to state
							onChange={(e) => setPassword(e.target.value)} // Update state on change
							className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
						/>
					</div>
					<button
						type="submit"
						className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
					>
						Log in
					</button>
				</form>
			</div>
		</div>
	);
}
