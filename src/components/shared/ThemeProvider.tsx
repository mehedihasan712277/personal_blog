"use client"

import React, { ReactNode, useContext, useEffect, useState } from "react"
import { ThemeContext } from "./ThemeContext"

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const { theme } = useContext(ThemeContext);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (mounted) {
        return <div className={theme}>{children}</div>;
    }
}

export default ThemeProvider;
