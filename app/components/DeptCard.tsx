import Image from 'next/image';

type Props = {
	id: number;
	title: string;
	description: string;
	icon: () => JSX.Element;
	image: string;
};

const DeptCard = ({ id, title, description, icon, image }: Props) => {
	return (
		<div className="max-w-[23rem] px-10 py-5 flex flex-col items-center justify-center gap-8 rounded-2xl border border-[rgba(255,255,255,0.11)] relative top-0 left-0 pointer-events-none">
			<div className="absolute top-0 h-[1px] w-[70%] opacity-70 bg-gradient-to-r from-[rgba(153,238,255,0)] via-white to-[rgba(255,255,255,0)]"></div>
			<div className="flex flex-col items-center gap-3">
				{icon()}
				<h2 className="text-center text-2xl font-bold">{title}</h2>
				<p className="opacity-70 text-center sm:text-gray-400 text-gray-500">
					Effortlessly switch between top providers like OpenAI,
					Replicate, & more to keep up with the latest models.
				</p>
			</div>
			<Image src="/team.jpg" alt="" height={400} width={400} />
		</div>
	);
};

export default DeptCard;
