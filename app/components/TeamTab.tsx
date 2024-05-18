import TeamCard from './TeamCard';

export default function TeamTab({ teamName }: { teamName: string }) {
	// implment team data fetch logic here
	return (
		<div className="w-full grid grid-cols-2 sm:flex sm:flex-wrap gap-4 mx-auto px-4">
			<TeamCard />
			<TeamCard />
			<TeamCard />
			<TeamCard />
			<TeamCard />
			<TeamCard />
			<TeamCard />
			<TeamCard />
			<TeamCard />
			<TeamCard />
			<TeamCard />
			<TeamCard />
			<TeamCard />
			<TeamCard />
			<TeamCard />
			<TeamCard />
			<TeamCard />
		</div>
	);
}
