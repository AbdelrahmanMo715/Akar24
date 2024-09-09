import { GrLanguage } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

function SwitchLang({isDropdownOpen , setIsDropdownOpen}) {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const { t, i18n } = useTranslation();
  const savedLang = localStorage.getItem("lang");

  useEffect(() => {
    if (savedLang) {
      try {
        const parsedLang = JSON.parse(savedLang);
        setCurrentLanguage(parsedLang);
        i18n.changeLanguage(parsedLang);
      } catch (error) {
        console.error('Failed to parse language from localStorage', error);
      }
    } else {
      setCurrentLanguage(i18n.language);
    }


  }, [savedLang]);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", JSON.stringify(lng));
    setCurrentLanguage(lng);
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <li 
    className="py-1 hover:bg-light-sm-bg hover:dark:bg-gray-700">
    <button
        className="block w-full text-end text-xl py-1 px-2" 
        onClick={() => handleLanguageChange(currentLanguage === 'en' ? 'ar' : 'en')}>
        <GrLanguage className="inline"/> {currentLanguage === "en" ? "العربية" : "ُEnglish"}
    </button>
    </li>

  )
}

export default SwitchLang
