'use client';

import { useEffect, useState } from 'react';
import * as motion from '../../lib/framer';
import type { Event } from '@prisma/client';
import Image from 'next/image';

export default function EventsPage() {
	const [upcomingDropdown, setUpcomingDropdown] = useState(true);
	const [pastDropdown, setPastDropdown] = useState(false);
	const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
	const [pastEvents, setPastEvents] = useState<Event[]>([]);

	function handleUpcomingDropdownClick() {
		setUpcomingDropdown(!upcomingDropdown);
	}

	function handlePastDropdownClick() {
		setPastDropdown(!pastDropdown);
	}

	async function fetchEvents(type: 'Past' | 'Upcoming'): Promise<Event[]> {
		let data: Event[] = [];
		try {
			const response = await fetch(
				'/api/fetchEvents/' + type.toLowerCase() + '/',
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}

			data = (await response.json()) as Event[];
			console.log(data);
			return data;
		} catch (error) {
			console.error(error);
			return data;
		}
	}

	useEffect(() => {
		fetchEvents('Upcoming')
			.then((data) => setUpcomingEvents(data))
			.catch((error) =>
				console.error('Failed to fetch upcoming events:', error)
			);

		fetchEvents('Past')
			.then((data) => setPastEvents(data))
			.catch((error) =>
				console.error('Failed to fetch past events:', error)
			);
	}, []);

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
				We&apos;re a{' '}
				<span className="font-cursive font-normal">happening</span>{' '}
				society
			</motion.h1>
			<p className="text-left text-lg mb-12 mt-6 max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl sm:text-gray-400 text-gray-500">
				We host a variety of events throughout the year, from socials to
				tech talks. Our events are designed to help you learn new
				skills, meet new people, and have fun.
			</p>

			<button
				className="w-full border-b border-white py-4 flex justify-between items-center"
				onClick={handleUpcomingDropdownClick}
			>
				<h2 className="text-3xl">Upcoming Events</h2>
				{upcomingDropdown ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="w-8 h-8"
					>
						<path
							fillRule="evenodd"
							d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z"
							clipRule="evenodd"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="w-8 h-8"
					>
						<path
							fillRule="evenodd"
							d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
							clipRule="evenodd"
						/>
					</svg>
				)}
			</button>
			{upcomingDropdown ? (
				upcomingEvents ? (
					<UpcomingEvents events={upcomingEvents} />
				) : (
					<NoUpcomingEventsToShow />
				)
			) : (
				<></>
			)}

			<button
				className="w-full border-b border-white py-4 flex justify-between items-center"
				onClick={handlePastDropdownClick}
			>
				<h2 className="text-3xl">Past Events</h2>
				{pastDropdown ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="w-8 h-8"
					>
						<path
							fillRule="evenodd"
							d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z"
							clipRule="evenodd"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="w-8 h-8"
					>
						<path
							fillRule="evenodd"
							d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
							clipRule="evenodd"
						/>
					</svg>
				)}
			</button>
			{pastDropdown ? <></> : <></>}

			<div className="mb-28"></div>
		</>
	);
}

function NoUpcomingEventsToShow() {
	return (
		<div className="px-4 py-8 text-lg flex flex-col justify-center items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-20 h-20"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
				/>
			</svg>
			<p className="text-xl mb-4 mt-2">
				Uh oh! There are no upcoming events at the moment.
			</p>
			<div className="text-gray-400">
				<p>
					Register at the link below to be the first one to receive
					updates on our upcoming events.
				</p>
				<p className="mb-4">We never spam. God promise!</p>
			</div>
			{/* On click of this button, a modal should open for user to enter their details. */}
			<button className="bg-blue-600 rounded-xl text-white px-4 py-3 hover:bg-blue-500 transition">
				Send Me Updates
			</button>
		</div>
	);
}

function UpcomingEvents({ events }: { events: Event[] }) {
	return (
		<div className="py-4 flex flex-wrap gap-4">
			<Card
				imgSrc={
					'https://utfs.io/f/60fa958c-367c-4caa-8c60-91a727fad2fd-dbor74.png'
				}
			/>
			<Card
				imgSrc={
					'https://utfs.io/f/60fa958c-367c-4caa-8c60-91a727fad2fd-dbor74.png'
				}
			/>
			<Card
				imgSrc={
					'https://utfs.io/f/60fa958c-367c-4caa-8c60-91a727fad2fd-dbor74.png'
				}
			/>
			<Card
				imgSrc={
					'https://utfs.io/f/60fa958c-367c-4caa-8c60-91a727fad2fd-dbor74.png'
				}
			/>
		</div>
	);
}

function Card({ imgSrc }: { imgSrc: string }) {
	return (
		<div className="relative flex flex-col rounded-md border border-[rgba(255,255,255,0.11)] max-w-xs hover:border-[rgba(59,130,246,0.7)] transition-all">
			<div className="p-2 h-full w-full rounded-md">
				<div className="absolute mx-auto h-[1px] w-3/4 opacity-70 bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
				<div className="flex max-h-80">
					<Image
						width={250}
						height={250}
						className="object-cover rounded-sm max-h-full max-w-full"
						alt=""
						src={imgSrc}
					/>
				</div>
				<div className="flex flex-col gap-4 p-2 pb-1">
					<div>
						<h2 className="text-xl font-semibold leading-6">
							Guillermo Rauch
						</h2>
						<p className="text-sm">@rauchg</p>
					</div>
					<p className="text-sm">CEO, Vercel</p>
				</div>
			</div>
		</div>
	);
}
