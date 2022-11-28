import { createContext, useState } from 'react';

export type State = {
    darkMode: boolean;
    toggleDarkMode: () => void
}

export const DarkModeContext= createContext<State>({
    darkMode: false,
    toggleDarkMode: () => {}
});

export function DarkModeProvider( { children }: { children: React.ReactNode } ) {
    console.log(children);
    const [ darkMode, setDarkMode ] = useState(false);
    const toggleDarkMode = () => setDarkMode((mode) => !mode)
    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}