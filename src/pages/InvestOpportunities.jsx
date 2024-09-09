import HeroImg from "../assets/InvsetHero.png";
import HeroBack from "../components/Heros/HeroBack";
import Title from "../components/Title/Title";
import { t } from "i18next";
import { useEffect } from "react";
import InvestRealEstate from "../components/InvestOpportunities/InvestRealEstate";
import { Helmet } from "react-helmet-async";
function InvestOpportunities() {
      useEffect(()=>{
        scrollTo(0,0)
      },[])
  return (
    <div className="bg-white dark:bg-dark-bg lg:p-7">
    <Helmet>
          <title>{t("Akar24")}  |  {t("navLinks.Investment_opportunities")}</title>
          <meta name="description" content={t('Investment.hero_title')} />
        </Helmet>
    <HeroBack 
        title={t("Investment.hero_title")}
        description="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله."
        isTextStart={true}
        imgSrc={HeroImg}
    />
    <div className="py-7 container mt-5">
            <Title 
                h2={t('Investment.section_title')}
                p="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم "
            />

            <InvestRealEstate/>
    </div>
      
    </div>
  )
}

export default InvestOpportunities
