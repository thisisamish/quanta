import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Quanta JSS',
	description:
		'The official society of the Department of Electronics and Communication Engineering, JSSATE, Noida',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-[#17181C] text-white`}>
				{children}
			</body>
		</html>
	);
}
