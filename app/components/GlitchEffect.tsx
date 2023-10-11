'use client';

import React, { useState, useRef, useEffect } from 'react';

let words = ['Robotics', 'AI', 'Arduino', 'Figma', 'React.js'];

const GlitchEffect = () => {
	const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const smallLetters = 'abcdefghijklmnopqrstuvwxyz';
	const [word, setWord] = useState(words[0]);
	const textRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setWord((prev) => words[(words.indexOf(prev) + 1) % words.length]);
		}, 3000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	useEffect(() => {
		if (textRef.current) {
			const el = textRef.current;
			const elDatasetValue = el.dataset.value as string;
			let iteration = 0;

			const newIntervalId = setInterval(() => {
				el.innerText = el.innerText
					.split('')
					.map((letter, index) => {
						if (index < iteration) {
							return elDatasetValue[index];
						}
						if (index === 0) {
							return capitalLetters[
								Math.floor(Math.random() * 26)
							];
						}
						return smallLetters[Math.floor(Math.random() * 26)];
					})
					.join('');

				if (iteration >= elDatasetValue.length) {
					clearInterval(newIntervalId);
				}

				iteration += 1 / 3;
			}, 50);
		}
	}, [word]);

	return (
		<span ref={textRef} data-value={word}>
			{word}
		</span>
	);
};

export default GlitchEffect;
