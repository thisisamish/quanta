'use client';

import { useEffect, useRef } from 'react';

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
			<div className="blob" ref={blobRef}></div>
		</>
	);
};

export default HoverEffect;
