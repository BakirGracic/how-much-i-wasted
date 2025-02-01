import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='flex h-screen items-center justify-center text-center'>
			<div className='prose'>
				<h1>404 | Not Found</h1>
				<p>Detours happen. It&apos;s getting back on track that matters!</p>
				<Link href='/'>
					<button className='btn btn-primary'>Get Back</button>
				</Link>
			</div>
		</div>
	);
}
