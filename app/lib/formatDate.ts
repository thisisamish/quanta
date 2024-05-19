export default function formatDate(date: string) {
	const d = new Date(date);
	const formattedDate =
		`${d.getDate() < 10 ? '0' + d.getDate() : d.getDate()}/` +
		`${
			d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1
		}/` +
		`${d.getFullYear()}`;

	let hours = d.getHours();
	const minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
	const amPm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'

	const formattedTime = `${hours}:${minutes} ${amPm}`;

	return {
		date: formattedDate,
		time: formattedTime,
	};
}
