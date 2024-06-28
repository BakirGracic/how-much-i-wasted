'use client'

import { useState, useEffect } from "react";
import Timer from "@/components/Timer";
import Picker from "@/components/Picker";

export default function Home() {
    const [inputDone, inputDoneSetter] = useState(false);
    const [DT, DTSetter] = useState('');
    const [calculated, calculatedSetter] = useState(0);

    useEffect(() => {
        const storedDT = localStorage.getItem("howmuchiwasted-client-DT");
        if (storedDT) {
            inputDoneSetter(true);
            DTSetter(storedDT);
        }
    }, [])

    function inputUnset() {
        localStorage.removeItem("howmuchiwasted-client-DT");
        inputDoneSetter(false);
        DTSetter('');
        calculatedSetter(0);
    }

    return (
        <section className="p-6">
            {
                inputDone
                ? 
                <Timer _DT={DT} _calculated={calculated} calculatedSetter={calculatedSetter} inputUnset={inputUnset} />
                :
                <Picker DTSetter={DTSetter} inputDoneSetter={inputDoneSetter} />
            }
        </section>
    );
}
