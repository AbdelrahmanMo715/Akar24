import { t } from "i18next";
import girlWithLap from "../../assets/girlwithlap.png";
import AboutTextImage from "../TextImg/AboutTextImage";

function Principles() {
    const textList = [
        'هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله. هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله.',
        'هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله. هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله.',
        'هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله. هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله.',
        'هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله. هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله.',
      ];
  return (
    <AboutTextImage 
    title={t("about.details.Our principles")} 
    textList={textList} 
    imageSrc={girlWithLap}
    isImageLeft={true} 
    imageWidth="550px"
    />
  )
}

export default Principles
