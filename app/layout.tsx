import './globals.css';

import { Inter } from 'next/font/google';
import { Libre_Baskerville } from 'next/font/google';

import type { Metadata } from 'next';
const inter = Inter({ subsets: ['latin'] });
const libreBaskerville = Libre_Baskerville({
	style: 'italic',
	weight: '400',
	variable: '--font-libre-baskerville',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Quanta JSS',
	description:
		'The official society of the Department of Electronics and Communication Engineering, JSSATE, Noida',
	viewport: {
		width: 'device-width',
		initialScale: 1,
		minimumScale: 1,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} ${libreBaskerville.variable} bg-background text-white overflow-x-hidden`}
			>
				{children}
			</body>
		</html>
	);
}
