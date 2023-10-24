import Link from 'next/link';

import { Instagram, LinkedIn, Twitter } from './Icons';

const Footer = () => {
	return (
		<div className="max-w-6xl mx-auto">
			<footer className="footer p-10 bg-neutral text-neutral-content">
				<aside>
					<svg
						width="50"
						viewBox="0 0 594 624"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M296.411 244.775L267.792 269.781C263.475 273.558 260.597 277.173 259.158 280.625C257.719 284.024 257 288.098 257 292.846V330.8C257 335.44 258.572 339.406 261.716 342.697C264.914 345.934 268.858 347.552 273.548 347.552C277.651 347.552 281.728 345.853 285.779 342.454L294.972 334.766L299.848 347.552H318.234C320.1 347.552 321.672 346.905 322.951 345.61C324.283 344.261 324.949 342.643 324.949 340.754C324.949 338.866 324.283 337.275 322.951 335.98C321.672 334.631 320.1 333.957 318.234 333.957H309.201L305.764 325.378L314.797 317.528C321.459 311.809 324.789 305.012 324.789 297.135V255.538C324.789 251.761 323.137 248.228 319.833 244.937C316.582 241.646 312.718 240 308.242 240C304.191 240 300.248 241.592 296.411 244.775ZM276.665 279.735L305.284 254.729C306.083 254.027 307.043 253.677 308.162 253.677C310.187 253.677 311.2 254.81 311.2 257.076V297.135C311.2 299.886 310.427 302.287 308.881 304.337C307.336 306.333 304.618 308.869 300.727 311.944L297.29 302.8C296.277 300.21 294.199 298.915 291.055 298.915C289.243 298.915 287.67 299.589 286.338 300.938C285.006 302.233 284.34 303.717 284.34 305.389C284.34 306.522 284.659 307.871 285.299 309.436L289.696 321.332L276.106 333.147C275.306 333.849 274.48 334.199 273.628 334.199C271.496 334.199 270.43 332.797 270.43 329.991V294.545C270.43 290.876 270.83 288.044 271.629 286.048C272.482 284.051 274.161 281.947 276.665 279.735Z"
							fill="white"
						/>
						<path
							d="M586.5 297.5C586.5 306.763 580.457 316.978 566.213 327.466C552.12 337.843 531.247 347.504 504.781 355.747C451.936 372.205 378.473 382.5 297 382.5C215.527 382.5 142.064 372.205 89.2195 355.747C62.7525 347.504 41.8797 337.843 27.7868 327.466C13.5434 316.978 7.5 306.763 7.5 297.5C7.5 288.237 13.5434 278.022 27.7868 267.534C41.8797 257.157 62.7525 247.496 89.2195 239.253C142.064 222.795 215.527 212.5 297 212.5C378.473 212.5 451.936 222.795 504.781 239.253C531.247 247.496 552.12 257.157 566.213 267.534C580.457 278.022 586.5 288.237 586.5 297.5Z"
							stroke="white"
							stroke-width="15"
						/>
						<path
							d="M293 587C283.737 587 273.522 580.957 263.034 566.713C252.657 552.62 242.996 531.747 234.753 505.281C218.295 452.436 208 378.973 208 297.5C208 216.027 218.295 142.564 234.753 89.7195C242.996 63.2525 252.657 42.3797 263.034 28.2868C273.522 14.0434 283.737 8 293 8C302.263 8 312.478 14.0434 322.966 28.2868C333.343 42.3797 343.004 63.2525 351.247 89.7195C367.705 142.564 378 216.027 378 297.5C378 378.973 367.705 452.436 351.247 505.281C343.004 531.747 333.343 552.62 322.966 566.713C312.478 580.957 302.263 587 293 587Z"
							stroke="white"
							stroke-width="15"
						/>
						<path
							d="M495.707 502.208C489.157 508.758 477.661 511.707 460.173 509.052C442.87 506.424 421.28 498.496 396.736 485.61C347.732 459.881 288.506 415.215 230.896 357.604C173.285 299.994 128.619 240.768 102.89 191.764C90.004 167.22 82.0757 145.63 79.4483 128.327C76.7929 110.839 79.7422 99.3429 86.2924 92.7927C92.8426 86.2425 104.339 83.2932 121.826 85.9486C139.129 88.576 160.72 96.5043 185.263 109.391C234.267 135.119 293.493 179.786 351.104 237.396C408.714 295.006 453.381 354.232 479.109 403.237C491.996 427.78 499.924 449.371 502.551 466.674C505.207 484.161 502.257 495.657 495.707 502.208Z"
							stroke="white"
							stroke-width="15"
						/>
						<path
							d="M497.708 94.7928C504.258 101.343 507.207 112.839 504.552 130.327C501.924 147.63 493.996 169.22 481.11 193.764C455.381 242.768 410.715 301.994 353.104 359.604C295.494 417.215 236.268 461.881 187.264 487.61C162.72 500.496 141.13 508.424 123.827 511.052C106.339 513.707 94.8429 510.758 88.2927 504.208C81.7425 497.657 78.7932 486.161 81.4486 468.674C84.076 451.371 92.0043 429.78 104.891 405.237C130.619 356.233 175.286 297.007 232.896 239.396C290.506 181.786 349.732 137.119 398.737 111.391C423.28 98.5043 444.871 90.576 462.174 87.9487C479.661 85.2932 491.157 88.2426 497.708 94.7928Z"
							stroke="white"
							stroke-width="15"
						/>
						<circle cx="501.5" cy="96.5" r="41.5" fill="white" />
						<circle cx="82.5" cy="96.5" r="41.5" fill="white" />
						<circle cx="292.5" cy="582.5" r="41.5" fill="white" />
					</svg>

					<p>Quanta JSS</p>
				</aside>
				<nav className="place-self-end">
					<header className="footer-title">Social</header>
					<div className="grid grid-flow-col gap-4">
						<Link href="/">{Instagram()}</Link>
						<Link href="/">{LinkedIn()}</Link>
						<Link href="/">{Twitter()}</Link>
					</div>
				</nav>
			</footer>
		</div>
	);
};

export default Footer;
