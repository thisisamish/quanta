import SquigglyLines from './components/SquigglyLines';
import Navbar from './components/Navbar';
import GlitchEffect from './components/GlitchEffect';
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
			<Navbar links={links} />
			<main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-16 mt-16 background-gradient">
				<h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
					Exploring{' '}
					<span className="relative whitespace-nowrap text-blue-600">
						<SquigglyLines />
						Imagination
					</span>{' '}
				</h1>
				<h1 className="mt-4 mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
					with <GlitchEffect />
				</h1>
				<h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
					We&apos;re the official technical society of the Department
					of Electronics and Communication Engineering at JSS Academy
					of Technical Education, Noida.
				</h2>
			</main>
			{/* <Footer /> */}
		</div>
	);
}
