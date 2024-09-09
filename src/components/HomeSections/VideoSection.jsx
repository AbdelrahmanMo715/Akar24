import Title from "../Title/Title"
import videoEx from "../../assets/vedio.png";
import { t } from "i18next";
import IntroVideo from "../Video/IntroVideo";
function VideoSection() {
    const stats = [
        { value: '+1000', label: t('home.stats.properties') },
        { value: '+400', label: t('home.stats.customers') },
        { value: '+350', label: t('home.stats.processes') },
        { value: '+115', label: t('home.stats.avidProperties') },
      ];
  return (
    <div className="container py-12">
       <IntroVideo
        title={t('home.video.title')} 
        description="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم "
        videoSource={videoEx}
       />
       <div className=" py-10">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-light-sm-title dark:text-dark-sm-title">{stat.value}</span>
              <span className="text-xl font-normal text-light-blue dark:text-dark-blue">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default VideoSection
