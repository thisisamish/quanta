import { Member } from '@prisma/client';
import Image from 'next/image';

export default function TeamCard({ member }: { member: Member }) {
	return (
		<div className="relative flex flex-col rounded-md border border-[rgba(255,255,255,0.11)] max-w-xs hover:border-[rgba(59,130,246,0.7)] transition-all">
			<div className="p-2 h-full w-full rounded-md">
				<div className="absolute mx-auto h-[1px] w-3/4 opacity-70 bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
				<div className="flex max-h-60">
					<Image
						width={180}
						height={180}
						className="object-cover rounded-sm max-h-full max-w-full"
						alt=""
						src={member.profilePic}
					/>
				</div>
				<div className="flex flex-col gap-4 p-2 pb-1">
					<div>
						<h2 className="text-xl font-semibold leading-6">
							{member.name}
						</h2>
						<p className="text-sm">{member.username}</p>
					</div>
					<p className="text-sm">{member.email}</p>
				</div>
			</div>
		</div>
	);
}
