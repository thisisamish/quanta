'use client';

export default function ScrollToTopButton() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return <button onClick={scrollToTop}>Go to top ↑</button>;
}
