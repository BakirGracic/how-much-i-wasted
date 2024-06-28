'use client'

import { useEffect } from "react"
import Link from "next/link"

export default function AgeTimer({ _DT, _calculated, calculatedSetter, inputUnset }) {
    function calcAge() {
        const currentDT = new Date();
        const birthDT = new Date(_DT);
        const ms = currentDT - birthDT;
        const yrs = ms / (1000 * 60 * 60 * 24 * 365);
        const formatted = yrs.toFixed(9);
        calculatedSetter(formatted);
    }

    useEffect(() => {
        calcAge()
        const interval = setInterval(() => {
            calcAge()
        }, 30);

        return () => clearInterval(interval);
    });
    
    return (
        <>
            <div className="fixed top-3 left-3">
                <p onClick={inputUnset} className="button">Reset</p>
            </div>
            <div className="text-center">
                <p className="mb-5">You have <span className="italic">wasted</span></p>
                <h2 className="text-4xl sm:text-5xl w-50 font-semibold tabular-nums">{_calculated}</h2>
                <p className="mt-5"><span className="italic">years</span> of your life</p>
            </div>
            <div className="fixed bottom-2 left-0 right-0">
                <p className="font-light text-center">
                    Day one, or one day?&nbsp;
                    <Link className="underline" target="_blank" href="https://www.google.com/search?q=how+to+take+action+with+my+life&oq=how+to+take+action+with+my+life">
                        Take action
                    </Link>
                    !
                </p>
            </div>
        </>
    )
}