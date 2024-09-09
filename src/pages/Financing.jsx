import HeroBack from "../components/Heros/HeroBack"
import HereoImg from "../assets/financeImg.png";
import Title from "../components/Title/Title";
import { t } from "i18next";
import { useEffect } from "react";
import FinancingFeatures from "../components/Financing/FinancingFeatures";
import FinancingTypes from "../components/Financing/FinancingTypes";
import FinancingTips from "../components/Financing/FinancingTips";
import FinancingSteps from "../components/Financing/FinancingSteps";
import { Helmet } from "react-helmet-async";
function Financing() {
    useEffect(()=>{
      scrollTo(0,0)
    },[])
  return (
    <div className="bg-white dark:bg-dark-bg lg:p-7">
        <Helmet>
          <title>{t("Akar24")}  |  {t("navLinks.Finance & real estate")}</title>
          <meta name="description" content={t('financing.hero_title')} />
        </Helmet>
        <HeroBack 
         title={t("financing.hero_title")}
         description="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله."
         isTextStart={false}
         imgSrc={HereoImg}
         />
         <div className="py-7 container mt-5">
            <Title 
                h2={t('financing.section_title')}
                p="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم "
            />
        <FinancingFeatures/>

        <FinancingTypes/>

        <FinancingTips/>

         <FinancingSteps/>
        
         </div>
    </div>
  )
}

export default Financing
