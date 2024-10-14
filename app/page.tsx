import { ManagerProvider } from "@/components/ManagerProvider";

export default function Page() {
    return (
        <main className="h-screen flex items-center justify-center p-4">
            <ManagerProvider />
        </main>
    );
}
