import './globals.css';

import { Inter } from 'next/font/google';

import Navbar from './components/Navbar';

import type { Metadata } from 'next';
import Footer from './components/Footer';
const inter = Inter({ subsets: ['latin'] });

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

const links = [
	{
		id: 1,
		name: 'Home',
		href: '/',
	},
	{
		id: 2,
		name: 'The Team',
		href: '/team',
	},
	{
		id: 3,
		name: 'Events',
		href: '/events',
	},
	// {
	// 	id: 4,
	// 	name: 'Photo Galllery',
	// 	href: '/photo-gallery',
	// },
	// {
	// 	id: 5,
	// 	name: 'Register For Recruitments',
	// 	href: '/register',
	// },
];

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} bg-background text-white overflow-x-hidden`}
			>
				<Navbar links={links} />
				{children}
				<Footer />
			</body>
		</html>
	);
}
