'use client'

import { useState, useEffect } from "react";
import AgeTimer from "@/components/AgeTimer";
import DatePicker from "@/components/DatePicker";

export default function Home() {
    const [inputDone, inputDoneSet] = useState(false);
    const [date, dateSet] = useState('');
    const [age, ageSet] = useState(0);

    useEffect(() => {
        const storedDate = localStorage.getItem("howmuchiwasted-client-date");
        if (storedDate) {
            dateSet(storedDate);
            inputDoneSet(true);
        }
    }, [])

    function dateUnset() {
        localStorage.removeItem("howmuchiwasted-client-date");
        inputDoneSet(false);
        dateSet('');
        ageSet(0);
    }

    return (
        <section className="p-6">
            {
                inputDone
                ? 
                <AgeTimer date={date} age={age} ageSet={ageSet} resetFunc={dateUnset} />
                :
                <DatePicker date={date} dateSet={dateSet} inputDone={inputDoneSet} />
            }
        </section>
    );
}
