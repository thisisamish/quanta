'use client';

import { useState } from 'react';
import { AuthContext } from '../lib/context';

export default function Layout({ children }: { children: React.ReactNode }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	return (
		<AuthContext.Provider
			value={{ username, setUsername, password, setPassword }}
		>
			{children}
		</AuthContext.Provider>
	);
}
