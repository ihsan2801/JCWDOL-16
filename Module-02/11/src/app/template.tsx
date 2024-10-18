"use client"
import { useState } from "react"
import useCountStore from "@/stores/CounterStore";

export default function Template({ children }: {children: React.ReactNode}) {
    const [count, setCount] = useState<number>(0);
    return (
        <div className="bg-violet-200">
            <div>{count}</div>
            <button> onClick={increment}Increment</button>
            <button> onClick={decrement}Decrement</button>
            {children}
        </div>
    );
}