'use client';

import { useEffect } from 'react';

const words = ['Robotics', 'Machine Learning', 'Arduino', 'Figma', 'React.js'];

const GlitchEffect = () => {
	// useEffect(() => {
	// 	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	// 	setInterval(() => {
	// 		for (let i = 0; i < words.length; i++) {
	// 			const el = document.getElementById('glitch');
	// 			if (el) {
	// 				el.dataset.value = words[i];
	// 				el.innerText = words[i];
	// 			}
	// 		}
	// 	}, 500);

		// let interval: number | undefined = undefined;

		// let iteration = 0;

		// clearInterval(interval);

		// interval = setInterval(() => {
		// 	event.target.innerText = event.target.innerText
		// 		.split('')
		// 		.map((letter, index) => {
		// 			if (index < iteration) {
		// 				return event.target.dataset.value[index];
		// 			}

		// 			return letters[Math.floor(Math.random() * 26)];
		// 		})
		// 		.join('');

		// 	if (iteration >= event.target.dataset.value.length) {
		// 		clearInterval(interval);
		// 	}

		// 	iteration += 1 / 3;
		// }, 30);
	// }, []);
	return <span id="glitch">GlitchEffect</span>;
};

export default GlitchEffect;
