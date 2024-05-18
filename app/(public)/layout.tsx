import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar links={links} />
			{children}
			<Footer />
		</>
	);
}
