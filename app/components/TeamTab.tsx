import { useEffect, useState } from 'react';
import TeamCard from './TeamCard';
import { Member } from '@prisma/client';

const tabButtonApiCallMappings: TabButtonApiCallMappings = {
	Executives: 'executives',
	'Year 1': '1',
	'Year 2': '2',
	'Year 3': '3',
	'Year 4': '4',
	Alumni: 'alumni',
};

type TabButtonApiCallMappings = {
	[key in TabButtonValues]: string;
};

type TabButtonValues =
	| 'Executives'
	| 'Year 1'
	| 'Year 2'
	| 'Year 3'
	| 'Year 4'
	| 'Alumni';

export default function TeamTab({ teamName }: { teamName: TabButtonValues }) {
	const [members, setMembers] = useState<Member[]>([]);

	async function fetchTeamInfo(teamName: TabButtonValues): Promise<Member[]> {
		let data: Member[] = [];
		try {
			const req =
				'/api/fetchTeamInfo/' +
				tabButtonApiCallMappings[teamName] +
				'/';
			const response = await fetch(req, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}

			data = (await response.json()).members as Member[];
			return data;
		} catch (error) {
			console.error(error);
			return data;
		}
	}

	useEffect(() => {
		fetchTeamInfo(teamName)
			.then((data) => setMembers(data))
			.catch((error) =>
				console.error('Failed to fetch team info:', error)
			);
	}, [teamName]);

	return (
		<div className="w-full grid grid-cols-2 sm:flex sm:flex-wrap gap-4 mx-auto px-4">
			{members.map((member) => (
				<TeamCard key={member.quantaId} member={member} />
			))}
		</div>
	);
}
