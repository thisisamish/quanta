'use client';

import { useState } from 'react';
import * as motion from '../../lib/framer';
import TeamTab from '../../components/TeamTab';

const TeamPage = () => {
	const [activeTab, setActiveTab] = useState('Executives');

	function handleTabClick(e: React.MouseEvent<HTMLButtonElement>) {
		const tab = e.currentTarget.textContent;
		if (tab) {
			setActiveTab(tab);
		}
	}

	return (
		<>
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					delay: 0.15,
					duration: 0.95,
					ease: [0.165, 0.84, 0.44, 1],
				}}
				className="mx-auto text-3xl font-bold tracking-normal text-gray-300 sm:text-5xl mt-32"
			>
				Meet <span className="font-cursive font-normal">The Team</span>
			</motion.h1>
			<p className="text-center lg:text-left text-lg mb-16 mt-6 max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl sm:text-gray-400 text-gray-500">
				Our team is a group of passionate individuals who are dedicated
				to creating a community that fosters learning and innovation. We
				are committed to providing the best opportunities for our
				members to grow and develop their skills.
			</p>
			<div className="mb-8">
				<TabButton
					tabName="Executives"
					activeTab={activeTab}
					onClick={handleTabClick}
				/>
				<TabButton
					tabName="Year 1"
					activeTab={activeTab}
					onClick={handleTabClick}
				/>
				<TabButton
					tabName="Year 2"
					activeTab={activeTab}
					onClick={handleTabClick}
				/>
				<TabButton
					tabName="Year 3"
					activeTab={activeTab}
					onClick={handleTabClick}
				/>
				<TabButton
					tabName="Year 4"
					activeTab={activeTab}
					onClick={handleTabClick}
				/>
			</div>
			<TeamTab teamName={activeTab} />
			<div className="mb-20"></div>
			{/* Add apply now component */}
		</>
	);
};

export default TeamPage;

function TabButton({
	tabName,
	activeTab,
	onClick,
}: {
	tabName: string;
	activeTab: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
	return (
		<button
			className={`px-8 py-4 hover:text-black hover:bg-white border border-gray-800 ${
				activeTab === tabName ? 'bg-white border-white text-black' : ''
			}`}
			onClick={onClick}
		>
			{tabName}
		</button>
	);
}
