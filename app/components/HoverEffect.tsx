'use client';

import { useEffect, useRef } from 'react';

import * as motion from '../lib/framer';

const HoverEffect = () => {
	const blobRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const blob = blobRef.current;

		window.onpointermove = (event) => {
			const { clientX, clientY } = event;
			if (blob) {
				blob.animate(
					{
						left: `${clientX}px`,
						top: `${clientY}px`,
					},
					{ duration: 2000, fill: 'forwards' }
				);
			}
		};
	}, []);

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					delay: 1,
					duration: 0.95,
					ease: [0.165, 0.84, 0.44, 1],
				}}
				className="blob"
				ref={blobRef}
			></motion.div>
		</>
	);
};

export default HoverEffect;
