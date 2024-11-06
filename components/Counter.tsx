"use client";

import { useEffect, useState } from "react";
import { useManagerContext } from "@/components/ManagerProvider";
import Link from "next/link";

export default function Counter() {
    const [short, setShort] = useState("");
    const [verbose, setVerbose] = useState("");

    const { lsDt, setDtValid, setLsDt } = useManagerContext();

    const reset = () => {
        setDtValid(false);
        setLsDt("");
        localStorage.removeItem(process.env.NEXT_PUBLIC_LS_KEY || "");
    };

    useEffect(() => {
        const calculateVerbose = () => {
            const dt = new Date(lsDt);
            const now = new Date();
    
            const diff = now.getTime() - dt.getTime();
    
            const seconds = Math.floor(diff / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);
    
            setVerbose(`${days}d ${hours % 24}h ${minutes % 60}m ${seconds % 60}s`);
        };
    
        const calculateShort = () => {
            const dt = new Date(lsDt);
            const now = new Date();
    
            const diff = now.getTime() - dt.getTime();
            const years = diff / (1000 * 60 * 60 * 24 * 365.25);
    
            setShort(years.toFixed(9));
        };

        const minuteInterval = setInterval(() => {
            calculateVerbose();
        }, 1000);

        const secondInterval = setInterval(() => {
            calculateShort();
        }, 50);

        calculateVerbose();
        calculateShort();

        return () => {
            clearInterval(minuteInterval);
            clearInterval(secondInterval);
        };
    }, [lsDt]);

    return (
        <>
            <div className="text-center">
                <h1 className="font-bold text-4xl mb-10">You have wasted</h1>
                <div>
                    <p className="tabular-nums text-primary text-4xl font-semibold">
                        {short}
                    </p>
                    <p className="tracking-wide font-semibold text-lg">
                        years
                    </p>
                </div>
                <p className="my-10 tracking-wide font-medium text-lg">-or-</p>
                <div>
                    <p className="tabular-nums text-primary text-4xl font-semibold">
                        {verbose}
                    </p>
                    <p className="tracking-wide font-semibold text-lg">of your life</p>
                </div>
                <div className="mt-16">
                    if it is wasted, &nbsp;
                    <Link
                        target="_blank"
                        href="https://bakir.dev/blog/exposing-life-gurus-self-improvement-hype-hoax"
                    >
                        <button className="btn btn-primary">
                            TAKE ACTION
                        </button>
                    </Link>
                </div>
            </div>
            <aside className="fixed top-[10px] left-[10px]">
                <button onClick={reset} className="btn">
                    Reset
                </button>
            </aside>
        </>
    );
}
