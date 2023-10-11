'use client';

import { useState, useEffect } from 'react';

interface MousePosition {
	x: number;
	y: number;
}

const HoverEffect = () => {
	const [cursorPosition, setCursorPosition] = useState<MousePosition>({
		x: 0,
		y: 0,
	});

	const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		const x = e.clientX;
		const y = e.clientY;
		setCursorPosition({ x, y });
	};

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setCursorPosition({ x: event.clientX, y: event.clientY });
		};
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<div className="hover-container" onMouseMove={handleMouseMove}>
			<div
				className="hover-effect"
				style={{
					left: cursorPosition.x + 'px',
					top: cursorPosition.y + 'px',
				}}
			></div>
		</div>
	);
};

export default HoverEffect;
