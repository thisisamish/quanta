'use client';

import { useState, useRef } from 'react';

const words = ['Robotics', 'AI', 'Arduino', 'Figma', 'React.js'];

const GlitchEffect = () => {
	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>(
		undefined
	);
	const [word, setWord] = useState(words[0]);
	const textRef = useRef(null);

	const handleMouseOver = () => {
		let iteration = 0;
		setWord((prev) => words[(words.indexOf(prev) + 1) % words.length]);

		clearInterval(intervalId);

		const newIntervalId = setInterval(() => {
			const currentText = textRef.current!.innerText;
			textRef.current!.innerText = currentText
				.split('')
				.map((letter, index) => {
					if (index < iteration) {
						return textRef.current!.dataset.value[index];
					}

					return letters[Math.floor(Math.random() * 26)];
				})
				.join('');

			if (iteration >= textRef.current!.dataset.value.length) {
				clearInterval(newIntervalId);
			}

			iteration += 1 / 3;
		}, 30);

		setIntervalId(newIntervalId);
	};

	return (
		<span ref={textRef} data-value={word} onMouseOver={handleMouseOver}>
			{word}
		</span>
	);
};

export default GlitchEffect;