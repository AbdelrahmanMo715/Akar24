import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import Logo from "../../assets/akar-logo.png";
import { IoMdClose } from "react-icons/io";
import SwitchLang from "../Buttons/SwitchLang";
import SwitchMode from "../Buttons/SwitchMode";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
    const { t, i18n } = useTranslation();
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
      setIsDropdownOpen((prevState) => !prevState);     

        };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };



    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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
        setIsDropdownOpen(!isDropdownOpen);
      };


  return (
    <nav className="relative font-londrina bg-light-bg dark:bg-dark-bg ">
    <div className="container relative">
    <div className="hamburger cursor-pointer" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
    </div>
    <Link to="/" className="absolute right-5 top-5 z-10"><img width="123px" className="" src={Logo} alt="logo"/></Link>
    <div
    ref={dropdownRef}>
      <button
     
      onClick={toggleDropdown}
      className={`moreBtn absolute top-4  border border-light-blue text-light-blue duration-300 ${isDropdownOpen ? "text-white bg-light-blue" : ""} hover:text-white hover:bg-light-blue px-2 py-4 w-[98px] h-[48px] rounded-2xl flex items-center justify-center text-lg`}
  >
      {t('More')}<svg
      className={`w-3 h-3 ms-3 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>

  {/* Dropdown Menu */}
  {isDropdownOpen && (
      <div
       
          className="absolute z-[555] top-16 left-16 md:left-0 bg-white text-light-text dark:text-white dark:bg-dark-bg  shadow-md rounded-md w-48 p-2"
      >
          <ul className="text-right">
              <li className="py-1 hover:bg-light-sm-bg hover:dark:bg-gray-700"><NavLink className="block w-full text-xl py-1 text-start" onClick={toggleDropdown} to="/Akar24/about">{t('navLinks.Who we are')}</NavLink></li>
              <li className="py-1 hover:bg-light-sm-bg hover:dark:bg-gray-700"><NavLink className="block w-full text-xl py-1 text-start" onClick={toggleDropdown} to="/Akar24/advertise">{t('navLinks.Advertise with us')}</NavLink></li>
              <li className="py-1 hover:bg-light-sm-bg hover:dark:bg-gray-700"><NavLink className="block w-full text-xl py-1 text-start" onClick={toggleDropdown} to="/Akar24/program">{t('navLinks.Aqar 24 Program')}</NavLink></li>
              <li className="py-1 hover:bg-light-sm-bg hover:dark:bg-gray-700"><NavLink className="block w-full text-xl py-1 text-start" onClick={toggleDropdown} to="/Akar24/articles">{t('navLinks.Articles')}</NavLink></li>
              <li className="py-1 hover:bg-light-sm-bg hover:dark:bg-gray-700"><NavLink className="block w-full text-xl py-1 text-start" onClick={toggleDropdown} to="/Akar24/infoGraphic">{t('navLinks.Infographic')}</NavLink></li>
              <li className="py-1 hover:bg-light-sm-bg hover:dark:bg-gray-700">
                  <button className="block w-full text-start text-xl py-1" 
                    onClick={toggleTheme}>{theme === "dark" ? t("ModeDay") : t("ModeNight")}
                  </button>
              </li>
              <SwitchLang isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen}/>
          </ul>
      </div>
      
  )}
  </div>
      <ul className={`nav-links bg-white dark:bg-dark-bg ${isOpen ? 'open' : ''}`}>
        <li onClick={toggleMenu} className={`${isOpen ? 'fade' : ''}`}><NavLink className="text-light-text dark:text-white" to="/Akar24/"> {t("navLinks.Home")}</NavLink></li>
        <li onClick={toggleMenu} className={`${isOpen ? 'fade' : ''}`}><NavLink className="text-light-text dark:text-white" to="/Akar24/news"> {t("navLinks.News")}</NavLink></li>
        <li onClick={toggleMenu} className={`${isOpen ? 'fade' : ''}`}><NavLink className="text-light-text dark:text-white" to="/Akar24/financing">{t("navLinks.Finance & real estate")}</NavLink></li>
        <li onClick={toggleMenu} className={`${isOpen ? 'fade' : ''}`}><NavLink className="text-light-text dark:text-white" to="/Akar24/auctions">{t("navLinks.Auctions")}</NavLink></li>
        <li onClick={toggleMenu} className={`${isOpen ? 'fade' : ''}`}><NavLink className="text-light-text dark:text-white" to="/Akar24/law">{t("navLinks.Real Estate Law")}</NavLink></li>
        <li onClick={toggleMenu} className={`${isOpen ? 'fade' : ''}`}><NavLink className="text-light-text dark:text-white" to="/Akar24/InvestOpportunities">{t("navLinks.Investment_opportunities")}</NavLink></li>
        <button onClick={toggleMenu} className="absolute lg:hidden left-5 top-5 text-3xl text-light-text dark:text-white "><IoMdClose/></button>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;