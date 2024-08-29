import React from 'react';
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
    const [theme, setTheme] = React.useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    React.useEffect(() => {
        const element = document.documentElement;
        if (theme === "dark") {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]); 

    return (
        <div>
            {theme === "light" ? (
                <img
                    onClick={() => setTheme("dark")}
                    src={LightButton} alt="Switch to Dark Mode"
                    className="w-12 cursor-pointer z-10 transition-opacity duration-300"
                />
            ) : (
                <img
                    onClick={() => setTheme("light")}
                    src={DarkButton} alt="Switch to Light Mode"
                    className="w-12 cursor-pointer z-10 transition-opacity duration-300"
                />
            )}
        </div>
    );
};

export default DarkMode;
