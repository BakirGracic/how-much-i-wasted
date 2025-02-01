import { ManagerProvider } from '@/components/ManagerProvider';

export default function Page() {
	return (
		<main className='flex h-screen items-center justify-center p-4'>
			<ManagerProvider />
		</main>
	);
}
