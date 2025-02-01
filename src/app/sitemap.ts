export default function Sitemap() {
	return [
		{
			url: `${process.env.NEXT_PUBLIC_APP_URL}/`,
			lastModified: new Date().toISOString().split('T')[0],
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_APP_URL}/sitemap.xml`,
			lastModified: new Date().toISOString().split('T')[0],
			changeFrequency: 'monthly',
			priority: 1,
		},
	];
}
