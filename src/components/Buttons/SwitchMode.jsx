import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function SwitchMode({isDropdownOpen , setIsDropdownOpen}) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  const { t } = useTranslation();

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme'));
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log(theme)
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <li className="py-1 hover:bg-light-sm-bg hover:dark:bg-gray-700">
    <button className="block w-full text-start text-xl py-1" 
      onClick={toggleTheme}>{theme === "dark" ? t("ModeDay") : t("ModeNight")}
    </button>
    </li>

  )
}

export default SwitchMode
