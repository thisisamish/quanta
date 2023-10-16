'use client';

import SquigglyLines from './components/SquigglyLines';
import Navbar from './components/Navbar';
// import GlitchEffect from './components/GlitchEffect';
import TechChangeEffect from './components/TechChangeEffect';
import HoverEffect from './components/HoverEffect';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import team from '../public/team.jpg';

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
		<>
			<div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 h-screen bg-background">
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
						We&apos;re the official technical society of the
						Department of Electronics and Communication Engineering
						at JSS Academy of Technical Education, Noida.
					</motion.h2>
				</main>
			</div>
			<div className="bg-gradient-to-b from-background via-[#34373f] via-40% to-white min-h-screen flex justify-center items-center">
				<div className="mx-auto px-2 max-w-6xl flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center items-center">
					<Image
						src={team}
						alt="quanta team picture"
						className="sm:max-w-xl md:max-w-2xl lg:max-w-3xl rounded-2xl grow-[0.7]"
					></Image>
					<div className="grow-[0.3] flex flex-col justify-center items-center lg:items-start">
						<p className="text-center lg:text-left text-lg mb-8 max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Possimus, temporibus numquam harum nemo ut
							modi sit incidunt sed consectetur perspiciatis eaque
							earum voluptatibus iusto odit itaque ea. Ipsum,
							maxime sapiente!
						</p>
						<Link
							href="/team"
							className="bg-blue-600 rounded-xl text-white px-4 py-3 hover:bg-blue-500 transition"
						>
							See The Team
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
