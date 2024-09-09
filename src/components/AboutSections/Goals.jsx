import { t } from "i18next";
import girlWithLap from "../../assets/girlwithlap.png";
import AboutTextImage from "../TextImg/AboutTextImage";

function Goals() {
    const textList = [
        'هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله. هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله.',
        'هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله. هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله.',
        'هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله. هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله.',
        'هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله. هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله.',
      ];
  return (
    <AboutTextImage 
          title={t("about.details.Our goals")} 
          textList={textList} 
          imageSrc={girlWithLap}
          isImageLeft={false} 
          imageWidth="550px"
          hasBG={true}
          />
  )
}

export default Goals
