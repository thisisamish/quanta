// TODOS: Add Quanta name logo for tablet and desktop
// TODOS: Add atom logo for mobile
// TODOS: Shift Register button to the main area on mobile because it is too cluttered

import Link from 'next/link';

import * as motion from '../lib/framer';

interface MenuItem {
	id: number;
	name: string;
	href: string;
}

const Navbar = ({ links }: { links: MenuItem[] }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				delay: 0.15,
				duration: 0.95,
				ease: [0.165, 0.84, 0.44, 1],
			}}
			className="navbar bg-base-100"
		>
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
				<a className="btn btn-ghost">
					<svg
						width="145"
						viewBox="0 0 2842 515"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M198.154 8.59999H257.77C384.778 8.59999 455.41 80.528 455.41 227.624C455.41 331.304 420.418 398.048 354.97 427.856L396.442 514.688H319.33L285.634 444.704C276.562 446 267.49 446 257.77 446H198.154C70.4981 446 0.514127 374.072 0.514127 227.624C0.514127 80.528 71.1461 8.59999 198.154 8.59999ZM205.93 276.872H283.042L321.274 357.872C360.802 339.08 378.298 296.96 378.298 227.624C378.298 127.832 342.01 85.064 257.77 85.064H198.154C113.914 85.064 76.9781 127.832 76.9781 227.624C76.9781 327.416 113.266 369.536 198.154 369.536H249.994L205.93 276.872ZM542.505 8.59999H620.265V300.848C620.265 344.264 642.297 369.536 692.841 369.536H770.601C819.849 369.536 842.529 344.264 842.529 300.848V8.59999H917.697V306.68C917.697 398.696 869.097 446 775.785 446H683.769C590.457 446 542.505 398.696 542.505 306.68V8.59999ZM1177.13 94.136L1038.46 446H954.218L1107.79 57.2C1123.99 16.376 1153.8 0.823977 1199.81 0.823977C1245.17 0.823977 1274.98 16.376 1290.53 57.2L1438.27 446H1353.39L1220.55 94.136C1216.66 83.768 1209.53 79.232 1199.16 79.232C1188.79 79.232 1181.67 83.768 1177.13 94.136ZM1579.01 99.968V446H1502.54V96.08C1502.54 39.056 1534.94 0.823977 1602.98 0.823977C1663.89 0.823977 1691.11 31.928 1709.25 81.824L1836.91 361.112C1842.09 371.48 1850.52 379.256 1864.77 379.256C1880.97 379.256 1890.69 369.536 1890.69 354.632V8.59999H1967.81V357.872C1967.81 415.544 1934.76 453.776 1867.37 453.776C1806.45 453.776 1778.59 422.672 1760.45 372.776L1632.79 93.488C1626.96 80.528 1619.18 74.696 1605.57 74.696C1588.08 74.696 1579.01 84.416 1579.01 99.968ZM2038.38 8.59999H2370.8V85.064H2243.15V446H2166.03V85.064H2038.38V8.59999ZM2580.08 94.136L2441.4 446H2357.16L2510.74 57.2C2526.94 16.376 2556.75 0.823977 2602.76 0.823977C2648.12 0.823977 2677.92 16.376 2693.48 57.2L2841.22 446H2756.33L2623.49 94.136C2619.6 83.768 2612.48 79.232 2602.11 79.232C2591.74 79.232 2584.61 83.768 2580.08 94.136Z"
							fill="white"
						/>
					</svg>
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
					className="bg-blue-600 rounded-xl text-white px-4 py-3 ml-4 hover:bg-blue-500 transition"
				>
					{links[links.length - 1].name}
				</Link>
			</div>
		</motion.div>
	);
};

export default Navbar;
