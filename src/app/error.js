'use client'

import Link from "next/link";

export default function ErrorBoundary( { error, reset } ) {
    return (
        <section className="text-center p-6">
			<h1 className="text-5xl font-bold mb-4">500</h1>
			<p className="mb-6 font-light">This is a temporary setback, not a stop sign. Let&apos;s try again!</p>
            <Link className="button" href='/'>Get back on track</Link>
		</section>
    )
}
