import Title from "../Title/Title"
import icon1 from "../../assets/Icon.png"
import icon2 from "../../assets/Icon-2.png"
import icon3 from "../../assets/Icon-3.png"
import { t } from "i18next";
function Services() {
    const servicesData = [
        {
            icon: icon3,
            title: t("home.services.Real estate marketing"),
            description: "هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله."
          },
        {
          icon: icon2,
          title: t("home.services.Real estate mediation"),
          description: "هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله."
        },
        
        {
            icon: icon1, // Replace with the actual icon path
            title: t("home.services.Owners Association"),
            description: "هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله."
          },
      ];
  return (
    <div className="bg-light-sm-bg dark:bg-dark-sm-bg py-6">
      <Title h2={t('home.services.title')} p="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم "/>
      <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service) => (
            <div key={service.title} className="bg-white dark:bg-dark-bg rounded-xl py-6 md:p-8 shadow-lg text-center flex flex-col items-center">
            <div className="w-[90px] h-[90px] bg-light-blue flex justify-center items-center rounded-full mb-5">
            <img src={service.icon} alt={service.title} className="w-[39px] h-[39px] object-contain" /></div>
            <h3 className="text-xl font-bold text-light-lg-title dark:text-dark-lg-title mb-2">{service.title}</h3>
            <p className="text-light-gray-color dark:text-dark-gray-color  font-normal text-[20px] px-7">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Services
