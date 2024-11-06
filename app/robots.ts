export default function Robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: `${process.env.APP_URL}/sitemap.xml`,
    };
}
