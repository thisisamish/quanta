import Image from 'next/image';
import Link from 'next/link';

import team from '../public/team.jpg';
import DeptCard from './components/DeptCard';
import Footer from './components/Footer';
import HoverEffect from './components/HoverEffect';
import { Design, Technical, Web } from './components/Icons';
import SquigglyLines from './components/SquigglyLines';
import TechChangeEffect from './components/TechChangeEffect';
import * as motion from './lib/framer';

const deptData = [
	{
		id: 1,
		title: 'Technical',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio, voluptates atque consequuntur facilis explicabo. Est ipsum, voluptate non vitae dolores provident, neque perferendis quos, distinctio explicabo tempore repellendus reiciendis?',
		icon: Technical,
		image: 'hello',
	},
	{
		id: 2,
		title: 'Design',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio, voluptates atque consequuntur facilis explicabo. Est ipsum, voluptate non vitae dolores provident, neque perferendis quos, distinctio explicabo tempore repellendus reiciendis?',
		icon: Design,
		image: 'hello',
	},
	{
		id: 3,
		title: 'Web',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio, voluptates atque consequuntur facilis explicabo. Est ipsum, voluptate non vitae dolores provident, neque perferendis quos, distinctio explicabo tempore repellendus reiciendis?',
		icon: Web,
		image: 'hello',
	},
];

export default function HomePage() {
	return (
		<>
			<div className="min-h-[30rem] mb-10 flex max-w-6xl mx-auto flex-col items-center justify-center py-2 bg-background">
				<HoverEffect />
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
						className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400 text-gray-500 leading-7"
					>
						We&apos;re the official technical society of the
						Department of Electronics and Communication Engineering
						at JSS Academy of Technical Education, Noida.
					</motion.h2>
				</main>
			</div>
			<div className="min-h-[40rem] mb-10 flex justify-center items-center">
				<div className="mx-auto px-4 max-w-6xl flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center items-center">
					<Image
						src={team}
						alt="quanta team picture"
						className="sm:max-w-xl md:max-w-2xl lg:max-w-3xl rounded-2xl grow-[0.7]"
					></Image>
					<div className="grow-[0.3] flex flex-col justify-center items-center lg:items-start">
						<p className="text-center lg:text-left text-lg mb-8 max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl sm:text-gray-400 text-gray-500">
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
			<div className="min-h-[40rem] mb-10 flex flex-col items-center justify-center px-4">
				<h2 className="text-4xl font-extrabold mb-8">Our Clubs</h2>
				<div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
					{deptData.map((dept) => (
						<DeptCard key={dept.id} {...dept} />
					))}
				</div>
			</div>
			<Footer />
		</>
	);
}
