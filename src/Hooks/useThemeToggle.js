import { useEffect, useState } from "react";

const useThemeToggle = () => {

    const [dark, setDark] = useState(false);

    const handleThemeToggle = () => {
        setDark(!dark);
        localStorage.setItem('dark-mode', !dark);
    };

    //change the data-theme attribute based on theme state
    useEffect(() => {
        if (dark) {
            document.querySelector('html').setAttribute("data-theme", "business")
        }
        else {
            document.querySelector('html').setAttribute("data-theme", "doctortheme")
        }
    }, [dark])

    //check local storage theme state and set theme according to it when refreshed.
    useEffect(() => {
        const localThemeState = JSON.parse(localStorage.getItem('dark-mode'));
        setDark(localThemeState);
    }, [])

    return [handleThemeToggle, dark];
}

export default useThemeToggle;