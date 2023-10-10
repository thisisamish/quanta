// TODOS: Add Quanta name logo for tablet and desktop
// TODOS: Add atom logo for mobile
// TODOS: Shift Register button to the main area on mobile because it is too cluttered

import Link from 'next/link';

interface MenuItem {
	id: number;
	name: string;
	href: string;
}

const Navbar = ({ links }: { links: MenuItem[] }) => {
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-blue-500"
					>
						{links.map((link) =>
							links.indexOf(link) === links.length - 1 ? null : (
								<li key={link.id}>
									<Link
										href={link.href}
										className="rounded-xl hover:text-black font-medium px-4 py-3 hover:bg-blue-300 transition"
									>
										{link.name}
									</Link>
								</li>
							)
						)}
					</ul>
				</div>
				<a className="btn btn-ghost normal-case text-3xl font-extrabold">
					QUANTA
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					{links.map((link) =>
						links.indexOf(link) === links.length - 1 ? null : (
							<li key={link.id}>
								<Link
									href={link.href}
									className="rounded-xl hover:text-black font-medium px-4 py-3 hover:bg-blue-300 transition"
								>
									{link.name}
								</Link>
							</li>
						)
					)}
				</ul>
			</div>
			<div className="navbar-end">
				<Link
					href={links[links.length - 1].href}
					className="btn bg-blue-600 rounded-xl text-white font-medium px-4 py-3 ml-4 hover:bg-blue-500 transition"
				>
					{links[links.length - 1].name}
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
