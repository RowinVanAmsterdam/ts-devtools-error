"use client"

import { useBearStore } from "./store/useBearStore";

export const Client = () => {
    const bear = useBearStore((state) => state.bears);

    return `Number of bears: ${bear}`;
}