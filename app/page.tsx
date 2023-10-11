'use client';

import SquigglyLines from './components/SquigglyLines';
import Navbar from './components/Navbar';
// import GlitchEffect from './components/GlitchEffect';
import TechChangeEffect from './components/TechChangeEffect';
import HoverEffect from './components/HoverEffect';
import { motion } from 'framer-motion';
// import Footer from '../components/Footer';

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
		name: 'Resources',
		href: '/resources',
	},
	{
		id: 4,
		name: 'Photo Galllery',
		href: '/photo-gallery',
	},
	{
		id: 5,
		name: 'Register For Recruitments',
		href: '/register',
	},
];

export default function HomePage() {
	return (
		<div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
			<HoverEffect />
			<Navbar links={links} />
			<main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-16 mt-16">
				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.15,
						duration: 0.95,
						ease: [0.165, 0.84, 0.44, 1],
					}}
					className="mx-auto max-w-4xl text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl"
				>
					Exploring{' '}
					<span className="relative whitespace-nowrap text-blue-600">
						<SquigglyLines />
						Imagination
					</span>{' '}
				</motion.h1>
				{/* with <GlitchEffect /> */}
				<motion.span
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.15,
						duration: 0.95,
						ease: [0.165, 0.84, 0.44, 1],
					}}
					className="mt-2 mx-auto max-w-4xl text-xl tracking-normal text-gray-500 sm:text-2xl"
				>
					with
				</motion.span>
				<TechChangeEffect />
				<motion.h2
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.15,
						duration: 0.95,
						ease: [0.165, 0.84, 0.44, 1],
					}}
					className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7"
				>
					We&apos;re the official technical society of the Department
					of Electronics and Communication Engineering at JSS Academy
					of Technical Education, Noida.
				</motion.h2>
			</main>
			{/* <Footer /> */}
		</div>
	);
}
