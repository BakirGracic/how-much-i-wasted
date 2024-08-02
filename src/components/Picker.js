'use client'

import { useState } from "react";

export default function Picker({ DTSetter, inputDoneSetter }) {
    const [_date, dateSetter] = useState('');
    const [_h, hSetter] = useState(0);
    const [_m, mSetter] = useState(0);

    const isValidDateTime = (dateTime) => {
        const currentDate = new Date();
        return dateTime instanceof Date && !isNaN(dateTime.getTime()) && dateTime <= currentDate;
    };

    const handleConfirm = () => {
        const inputDateTime = new Date(_date);
        inputDateTime.setHours(_h);
        inputDateTime.setMinutes(_m);
    
        const currentDate = new Date();
    
        if (inputDateTime > currentDate) {
            alert('The selected date and time cannot be in the future');
            return;
        }
    
        if (isValidDateTime(inputDateTime)) {
            localStorage.setItem('howmuchiwasted-client-DT', inputDateTime);
            DTSetter(inputDateTime)
            inputDoneSetter(true);
        } else {
            alert('Invalid date or time');
            return;
        }
    }
    
    return (
        <div className="text-center">
            <p className="mb-5">Tell the calculator your birthdate and time</p>
            <input className="button custom-input" type="date" value={_date} onChange={(e) => {dateSetter(e.target.value)}} />
            <div className="flex items-center justify-center">
                <input className="button custom-input" type="number" value={_h} min={0} max={23} onChange={(e) => {hSetter(e.target.value)}} />
                <span className="mr-3 ml-1">h</span>
                <input className="button custom-input" type="number" value={_m} min={0} max={59} onChange={(e) => {mSetter(e.target.value)}} />
                <span className="ml-1">m</span>
            </div>
            <p onClick={handleConfirm} className="button mx-auto mt-5">Done</p>
        </div>
    );
}
