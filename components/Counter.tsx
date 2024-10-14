"use client";

import { useEffect, useState } from "react";
import { useManagerContext } from "./ManagerProvider";
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

    useEffect(() => {
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
    }, []);

    return (
        <>
            <div className="text-center">
                <h1 className="font-bold text-3xl mb-10">You have wasted</h1>
                <div>
                    <p className="font-bold text-4xl tabular-nums text-primary">
                        {short}
                    </p>
                    <p className="font-semibold mb-6 text-lg tracking-wide">
                        years
                    </p>
                </div>
                <p className="mb-6">-or-</p>
                <div>
                    <p className="font-bold text-4xl tabular-nums text-primary">
                        {verbose}
                    </p>
                    <p className="font-semibold">of your life</p>
                </div>
                <div>
                    if it is wasted, &nbsp;
                    <Link
                        target="_blank"
                        href="https://bakir.dev/blog/exposing-life-gurus-self-improvement-hype-hoax"
                    >
                        <button className="btn btn-primary mt-10">
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
