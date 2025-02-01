import '@/css/tailwind.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
	title: {
		default: 'How much I wasted?',
		template: 'How much I wasted? | %s',
	},
	description: 'Check how much time of your life you spent, or wasted, and take action!',
	generator: 'Next.js 15',
	applicationName: 'How much I wasted?',
	referrer: 'origin',
	keywords: 'nextjs, react, typescript, time, waste, life, longevity, procrastination, self-improvement',
	authors: [{ name: 'BakirGracic', url: 'https://bakir.dev' }],
	creator: 'BakirGracic',
	publisher: 'BakirGracic',
	metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || ''),
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_APP_URL}/`,
		languages: {
			'en-US': `${process.env.NEXT_PUBLIC_APP_URL}/`,
		},
	},
	openGraph: {
		title: 'How much I wasted?',
		description: 'Check how much time of your life you spent, or wasted, and take action!',
		url: process.env.NEXT_PUBLIC_APP_URL,
		siteName: 'How much I wasted?',
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_APP_URL}/og.png`,
				alt: 'How much I wasted OpenGraph Image',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
	},
	icons: {
		icon: [
			{ url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
			{ url: '/favicon.svg', type: 'image/svg+xml' },
		],
		shortcut: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
	manifest: `${process.env.NEXT_PUBLIC_APP_URL}/site.webmanifest`,
	twitter: {
		card: 'app',
		title: 'How much I wasted?',
		description: 'Check how much time of your life you spent, or wasted, and take action!',
		siteId: '1704851009380704256',
		creator: '@gracic_bakir',
		creatorId: '1704851009380704256',
		images: {
			url: `${process.env.NEXT_PUBLIC_APP_URL || ''}/og.png`,
			alt: 'How much I wasted OpenGraph Image',
		},
		app: {
			name: 'twitter_app',
			id: {
				iphone: 'twitter_app://iphone',
				ipad: 'twitter_app://ipad',
				googleplay: 'twitter_app://googleplay',
			},
			url: {
				iphone: 'https://iphone_url',
				ipad: 'https://ipad_url',
			},
		},
	},
	appleWebApp: {
		title: 'How much I wasted?',
	},
	appLinks: {
		web: {
			url: process.env.NEXT_PUBLIC_APP_URL || '',
			should_fallback: true,
		},
	},
	category: 'technology, philosophy, time, it, programming, coding, project, self-improvement',
};

export const viewport: Viewport = {
	themeColor: '#FFF248',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en-US'>
			<body className='font-sans'>{children}</body>
			<GoogleAnalytics gaId={process.env.GA_ID || ''} />
		</html>
	);
}
