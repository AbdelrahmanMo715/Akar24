import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Logo from "../../assets/akar-logo.png";
import { t } from "i18next";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function Footer() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
      const savedLang = localStorage.getItem("lang");
      if (savedLang) {
          try {
              const parsedLang = JSON.parse(savedLang);
              i18n.changeLanguage(parsedLang);
          } catch (error) {
              console.error('Failed to parse language from localStorage', error);
          }
      }
  }, [i18n]);

  const handleLanguageChange = (lng) => {
      i18n.changeLanguage(lng);
      localStorage.setItem("lang", JSON.stringify(lng));
  };
  return (
    <footer className="bg-light-sm-bg dark:bg-dark-sm-bg text-center md:text-start  p-4 pt-8">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="text-center md:text-start">
        <img width="123px" className="block mx-auto md:mx-0" src={Logo} alt="logo"/>
        <p className="text-light-text dark:text-white mt-2 mb-3 font-medium">{t('footer.slogan')}</p>
        <p className="text-light-text dark:text-white  font-medium">{t('footer.follow_Us')}</p>
        <div className="mt-4 flex justify-center md:justify-start gap-8">
          <a href="#" className="text-light-blue dark:text-dark-blue">
            <SiFacebook className="w-5 h-5 "/>
          </a>
          <a href="#" className="text-light-blue dark:text-dark-blue">
           <FaLinkedin className="w-5 h-5 "/>
          </a>
          <a href="#" className="text-light-blue dark:text-dark-blue">
            <FaInstagram className="w-5 h-5 "/>
          </a>
          <a href="#" className="text-light-blue dark:text-dark-blue">
            <FaTwitter className="w-5 h-5 "/>
          </a>
        </div>
        <div className="mt-4 flex justify-center md:justify-start gap-8 text-light-sm-title dark:text-dark-sm-title font-medium ">
          <button onClick={() => handleLanguageChange('en')}>English</button>
          <button onClick={() => handleLanguageChange('ar')}>العريبة</button>
        </div>
      </div>
      <div>
        <h3 className="text-light-text dark:text-white font-bold mb-3">{t('footer.sections.sites.title')}</h3>
        <div className="flex gap-14 justify-center md:justify-start">
        <ul className="text-light-sm-title dark:text-dark-sm-title font-medium">
          <li className="mb-2"><Link to="/Akar24/news">{t('footer.sections.sites.news')}</Link></li>
          <li className="mb-2"><Link to="/Akar24/financing">{t('footer.sections.sites.financing')}</Link></li>
          <li className="mb-2"><Link to="/Akar24/auctions">{t('footer.sections.sites.auctions')}</Link></li>
          <li className="mb-2"><Link to="/Akar24/law">{t('footer.sections.sites.real_estate_law')}</Link></li>
          <li className="mb-2"><Link to="/Akar24/InvestOpportunities">{t('footer.sections.sites.investment_opportunities')}</Link></li>
        </ul>
        <ul className="text-light-sm-title dark:text-dark-sm-title font-medium">
        <li className="mb-2"><Link to="/Akar24/about">{t('footer.sections.sites.Who we are')}</Link></li>
        <li className="mb-2"><Link to="/Akar24/advertise">{t('footer.sections.sites.Advertise with us')}</Link></li>
        <li className="mb-2"><Link to="/Akar24/program">{t('footer.sections.sites.Aqar 24 Program')}</Link></li>
        <li className="mb-2"><Link to="/Akar24/articles">{t('footer.sections.sites.Articles')}</Link></li>
      </ul>
        
        </div>
        
      </div>
      <div>
        <h3 className="text-light-text dark:text-white font-bold mb-3">{t('footer.sections.help.title')}</h3>
        <ul className="text-light-sm-title dark:text-dark-sm-title font-medium">
          <li className="mb-2"><a href="#">{t('footer.sections.help.terms_conditions')}</a></li>
          <li className="mb-2"><a href="#">{t('footer.sections.help.team')}</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-light-text dark:text-white font-bold mb-3">{t('footer.sections.contact.title')}</h3>
        <p className="text-light-sm-title dark:text-dark-sm-title font-medium mb-2">+20 101 002 0030</p>
        <p className="text-light-sm-title dark:text-dark-sm-title font-medium">Allsafe@gmail.com</p>
      </div>
    </div>
    <div className="mt-8 border-t border-gray-300 pt-4 text-gray-600 dark:text-white text-sm flex justify-between items-center">
      <p>{t("footer.rights")}<a href="https://www.allsafeeg.com/ar" target="_blank" className="text-light-blue dark:text-dark-blue">All Safe</a></p>
    </div>
  </footer>
  )
}

export default Footer
