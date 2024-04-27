/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
				bg: "#0d0d0d",
                accent: "#d3ff0d",
			},
            fontFamily: {
                body: ["var(--font-work-sans)", "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
            }
        },
    },
    plugins: [],
};
