import React, { useEffect } from 'react'
import HeroBack from '../components/Heros/HeroBack'
import HeroImg from "../assets/lawImg.png";
import Title from '../components/Title/Title';
import { t } from 'i18next';
import LawImportance from '../components/AkarLaw/LawImportance';
import LawPrinciples from '../components/AkarLaw/LawPrinciples';
import LawSources from '../components/AkarLaw/LawSources';
import LawExamples from '../components/AkarLaw/LawExamples';
import { Helmet } from 'react-helmet-async';
function Law() {
      useEffect(()=>{
        scrollTo(0,0)
      },[])
  return (
    <div className='bg-white dark:bg-dark-bg lg:p-7'>
              <Helmet>
              <title>{t("Akar24")}  |  {t("navLinks.Real Estate Law")}</title>
              <meta name="description" content={t('law.hero_title')} />
            </Helmet>
            <HeroBack
                title={t("law.hero_title")}
                description="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله."
                imgSrc={HeroImg}
                isTextStart={false}
            />
            <div className='py-7 container mt-5'>
                <Title
                h2={t('law.section_title')}
                p="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم "
                />

                <LawImportance/>
                <LawPrinciples/>
                <LawSources/>
                <LawExamples/>
            </div>
    </div>
  )
}

export default Law
