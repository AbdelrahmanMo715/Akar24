import Title from "../components/Title/Title"
import { t } from "i18next";
import { useEffect } from "react";
import AdForm from "../components/Forms/AdForm";
import { Helmet } from "react-helmet-async";

function Advertise() {
      useEffect(()=>{
        scrollTo(0,0)
      },[])
  return (
    <div className="bg-white dark:bg-dark-bg lg:p-7">
        <Helmet>
          <title>{t("Akar24")}  |  {t("navLinks.Advertise with us")}</title>
          <meta name="description" content={t('home.hero_title')} />
        </Helmet>
    <Title 
        h2={t('Advertise.title')}
         p="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم "
        />

      <AdForm/>

    </div>
  )
}

export default Advertise
