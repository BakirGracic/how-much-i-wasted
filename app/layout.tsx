import "@/styles/tailwind-base.css";
import "@/styles/tailwind-config.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
    metadataBase: new URL(process.env.APP_URL || "/"),
    title: "How much I wasted?",
    description:
        "Check how much time of your life you spent, or wasted, and take action!",
    keywords: [
        "nextjs",
        "react",
        "typescript",
        "time",
        "waste",
        "life",
        "longevity",
        "procrastination",
        "self-improvement",
    ],
    authors: [
        {
            name: "BakirGracic",
            url: "https://bakir.dev/",
        },
    ],
    alternates: {
        canonical: "/",
        languages: {
            "en-US": "/",
        },
    },
    assets: `${process.env.APP_URL || ""}/assets`,
    manifest: `${process.env.APP_URL || ""}/site.webmanifest`,
    applicationName: "How much I wasted?",
    creator: "BakirGracic",
    publisher: "BakirGracic",
    category: "technology",
    robots: {
        index: true,
        follow: true,
        nocache: false,
    },
    openGraph: {
        title: "How much I wasted?",
        description:
            "Check how much time of your life you spent, or wasted, and take action!",
        siteName: "How much I wasted?",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: `${process.env.APP_URL || ""}/og.png`,
                width: 1200,
                height: 630,
                alt: "How much I wasted? OpenGraph Image",
            },
        ],
    },
    icons: {
        icon: [
            {
                url: `${process.env.APP_URL || ""}/favicon.ico`,
                type: "image/icon",
                sizes: "48x48",
            },
            {
                url: `${process.env.APP_URL || ""}/favicon-32x32.png`,
                type: "image/png",
                sizes: "32x32",
            },
            {
                url: `${process.env.APP_URL || ""}/favicon-16x16.png`,
                type: "image/png",
                sizes: "16x16",
            },
        ],
        other: [
            {
                rel: "apple-touch-icon",
                url: `${process.env.APP_URL || ""}/apple-touch-icon.png`,
                sizes: "180x180",
            },
            {
                rel: "apple-touch-icon-precomposed",
                url: `${
                    process.env.APP_URL || ""
                }/apple-touch-icon-precomposed.png`,
                sizes: "180x180",
            },
            {
                rel: "mask-icon",
                url: `${process.env.APP_URL || ""}/safari-pinned-tab.svg`,
                color: "#1eb854",
            },
        ],
    },
};

export const viewport = {
    themeColor: [`#FFF248`],
    colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        <html>
            <body>{children}</body>
            {process.env.GA_ID && <GoogleAnalytics gaId={process.env.GA_ID} />}
        </html>
    );
}
