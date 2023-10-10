import Link from 'next/link';

interface MenuItem {
	id: number;
	name: string;
	href: string;
}

const Navbar = ({ links }: { links: MenuItem[] }) => {
	return (
		<nav className="flex justify-between items-center w-full py-2">
			<div className="text-3xl font-black">QUANTA</div>
			<ul className="flex gap-1 items-center">
				{links.map((link) => (
					<li key={link.id}>
						<Link
							href={link.href}
							className={`${
								links.indexOf(link) === links.length - 1
									? 'bg-blue-600 rounded-xl text-white font-medium px-4 py-3 ml-4 hover:bg-blue-500 transition'
									: 'rounded-xl hover:text-black font-medium px-4 py-3 hover:bg-blue-300 transition'
							}`}
						>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
