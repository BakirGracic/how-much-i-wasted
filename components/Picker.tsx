"use client";

import { useState } from "react";
import { useManagerContext } from "@/components/ManagerProvider";

export default function Picker() {
    const { setDtValid, setLsDt } = useManagerContext();

    const [formData, setFormData] = useState({
        year: "",
        month: "",
        day: "",
        hour: "",
        minute: "",
    });

    const [errors, setErrors] = useState({
        year: "",
        month: "",
        day: "",
        hour: "",
        minute: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let valid = true;
        const newErrors = { year: "", month: "", day: "", hour: "", minute: "" };
        const currentYear = new Date().getFullYear();

        if (
            !formData.year.match(/^\d{4}$/) ||
            parseInt(formData.year) < 1000 ||
            parseInt(formData.year) > currentYear
        ) {
            newErrors.year = "year invalid";
            valid = false;
        }
        if (!formData.month.match(/^(0?[1-9]|1[012])$/)) {
            newErrors.month = "month invalid";
            valid = false;
        }
        if (!formData.day.match(/^(0?[1-9]|[12][0-9]|3[01])$/)) {
            newErrors.day = "day invalid";
            valid = false;
        }
        if (formData.hour && !formData.hour.match(/^([01]?[0-9]|2[0-3])$/)) {
            newErrors.hour = "hour invalid";
            valid = false;
        }
        if (formData.minute && !formData.minute.match(/^[0-5]?[0-9]$/)) {
            newErrors.minute = "minute invalid";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            const dateTime = new Date(
                parseInt(formData.year),
                parseInt(formData.month) - 1,
                parseInt(formData.day),
                parseInt(formData.hour) || 0,
                parseInt(formData.minute) || 0
            );
            localStorage.setItem(
                process.env.NEXT_PUBLIC_LS_KEY || "",
                dateTime.toISOString()
            );
            setDtValid(true);
            setLsDt(dateTime.toISOString());
        }
    };

    return (
        <form onSubmit={handleSubmit} className="text-center">
            {/* text */}
            <p className="mb-8 text-xl font-semibold">
                Enter your birthdate <br /> and time to find out!
            </p>

            <div className="mx-auto max-w-[300px] text-left">
                {/* year */}
                <label className="input input-bordered flex items-center gap-2">
                    <span className="min-w-[60px]">Year*</span>
                    <input
                        type="number"
                        maxLength={4}
                        onInput={(e) => {
                            const input = e.target as HTMLInputElement;
                            input.value = input.value.slice(0, 4).replace(/[^0-9]/g, '');
                        }}
                        inputMode="numeric"
                        name="year"
                        placeholder={`1000-${new Date().getFullYear()}`}
                        value={formData.year}
                        onChange={handleChange}
                    />
                </label>
                {errors.year && <p className="text-red-500">{errors.year}</p>}
                {/* month */}
                <label className="input input-bordered flex items-center gap-2">
                    <span className="min-w-[60px]">Month*</span>
                    <input
                        type="number"
                        maxLength={2}
                        onInput={(e) => {
                            const input = e.target as HTMLInputElement;
                            input.value = input.value.slice(0, 2).replace(/[^0-9]/g, '');
                        }}
                        inputMode="numeric"
                        name="month"
                        placeholder="1-12"
                        value={formData.month}
                        onChange={handleChange}
                    />
                </label>
                {errors.month && <p className="text-red-500">{errors.month}</p>}
                {/* day */}
                <label className="input input-bordered flex items-center gap-2">
                    <span className="min-w-[60px]">Day*</span>
                    <input
                        type="number"
                        maxLength={2}
                        onInput={(e) => {
                            const input = e.target as HTMLInputElement;
                            input.value = input.value.slice(0, 2).replace(/[^0-9]/g, '');
                        }}
                        inputMode="numeric"
                        name="day"
                        placeholder="1-31"
                        value={formData.day}
                        onChange={handleChange}
                    />
                </label>
                {errors.day && <p className="text-red-500">{errors.day}</p>}
                {/* hour */}
                <label className="input input-bordered flex items-center gap-2">
                    <span className="min-w-[60px]">Hour</span>
                    <input
                        type="number"
                        maxLength={2}
                        onInput={(e) => {
                            const input = e.target as HTMLInputElement;
                            input.value = input.value.slice(0, 2).replace(/[^0-9]/g, '');
                        }}
                        inputMode="numeric"
                        name="hour"
                        placeholder="0-23"
                        value={formData.hour}
                        onChange={handleChange}
                    />
                </label>
                {errors.hour && <p className="text-red-500">{errors.hour}</p>}
                {/* Minute */}
                <label className="input input-bordered flex items-center gap-2">
                    <span className="min-w-[60px]">Minute</span>
                    <input
                        type="number"
                        maxLength={2}
                        onInput={(e) => {
                            const input = e.target as HTMLInputElement;
                            input.value = input.value.slice(0, 2).replace(/[^0-9]/g, '');
                        }}
                        inputMode="numeric"
                        name="minute"
                        placeholder="0-59"
                        value={formData.minute}
                        onChange={handleChange}
                    />
                </label>
                {errors.minute && (
                    <p className="text-red-500">{errors.minute}</p>
                )}
            </div>

            {/* submit */}
            <button className="btn btn-primary mt-8">Surprise me!</button>
        </form>
    );
}
