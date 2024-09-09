import { useTranslation } from 'react-i18next';
function HeroBack({ title, description, isTextStart, imgSrc }) {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  return (
    <div className="container py-3">
    <div className="relative w-full h-[514px]">
    {/* Background Image */}
    <img
      src={imgSrc}
      alt="Hero Background"
      className="w-full h-full object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-[#E5F2FF80] dark:bg-[#1A1A1A80]"></div>

    {/* Text Content */}
    <div
      className={`absolute inset-0 flex items-center justify-${
        isTextStart ? 'start' : 'center'
      } p-8 lg:p-16 lg:pr-10`}
    >
      <div
        className={` max-w-2xl  ${isEnglish? "h-auto" : "h-[294px]"} ${
          isTextStart ? 'text-center lg:text-start' : 'text-center'
        }`}
      >
        <h1 className="text-3xl mt-14 md:mt-10 lg:mt-0 md:text-5xl lg:text-[80px] lg:leading-[80px] font-semibold text-light-lg-title dark:text-dark-lg-title">{title}</h1>
        <p className="mt-4 text-lg lg:text-2xl font-medium text-light-lg-title dark:text-dark-lg-title">{description}</p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default HeroBack
