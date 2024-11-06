"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Picker from "@/components/Picker";
import Counter from "@/components/Counter";

interface ManagerContextProps {
    dtValid: boolean;
    setDtValid: (valid: boolean) => void;
    lsDt: string;
    setLsDt: (dt: string) => void;
}

const ManagerContext = createContext<ManagerContextProps | undefined>(undefined);

export const ManagerProvider = () => {
    const [dtValid, setDtValid] = useState(false);
    const [lsDt, setLsDt] = useState("");

    useEffect(() => {
        const ls_dt = localStorage.getItem(process.env.NEXT_PUBLIC_LS_KEY || "");

        if (!ls_dt) {
            setDtValid(false);
            return;
        }

        const dt = new Date(ls_dt);

        if (isNaN(dt.getTime())) {
            setDtValid(false);
            return;
        }

        setLsDt(ls_dt);
        setDtValid(true);
    }, []);

    return <ManagerContext.Provider value={{ dtValid, setDtValid, lsDt, setLsDt }}>{dtValid ? <Counter /> : <Picker />}</ManagerContext.Provider>;
};

export const useManagerContext = () => {
    const context = useContext(ManagerContext);
    if (context === undefined) {
        throw new Error("useManagerContext must be used within a ManagerProvider");
    }
    return context;
};
