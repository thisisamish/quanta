'use client';

import * as motion from '../lib/framer';
import { useEffect, useState } from 'react';

const words = ['Robotics', 'Machine Learning', 'Arduino', 'Figma', 'React'];

const TechChangeEffect = () => {
	const [word, setWord] = useState(words[0]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setWord((prev) => words[(words.indexOf(prev) + 1) % words.length]);
		}, 5000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<motion.span
			key={word}
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				delay: 0.15,
				duration: 0.95,
				ease: [0.165, 0.84, 0.44, 1],
			}}
			className="mx-auto max-w-4xl text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl"
		>
			{word}
		</motion.span>
	);
};

export default TechChangeEffect;
