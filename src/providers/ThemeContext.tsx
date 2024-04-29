import { useState, createContext, PropsWithChildren } from "react";

type ContextType = [
    string,
    (color: string) => void
]

export const myContext = createContext<ContextType>(['', () => {}])

export default function ThemeContext({ children }: PropsWithChildren<{}>) {
    const [color, setColor] = useState("Light")
    return (
        <myContext.Provider value={[color, setColor]}>
            {children}
        </myContext.Provider>
    );
}
