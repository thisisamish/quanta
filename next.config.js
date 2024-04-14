/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'nextjs.org',
				port: '',
			},
		],
	},
};

module.exports = nextConfig;
