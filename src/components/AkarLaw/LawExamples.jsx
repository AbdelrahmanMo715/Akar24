import { FaCheckCircle, FaDollarSign, FaLock, FaShieldAlt } from 'react-icons/fa';
import AkarLawImage from "../../assets/AkarLawImage.png"
import ShowAkarLaw from './ShowAkarLaw';
import { t } from 'i18next';

function LawExamples() {
    const Features = [
        { icon: <FaCheckCircle />, name: "هذا النص يتم استبداله:", description: "هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله" },
        { icon: <FaDollarSign />, name: "هذا النص يتم استبداله:", description: "هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله" },
        { icon: <FaShieldAlt />, name: "هذا النص يتم استبداله:", description: "هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله" },
        { icon: <FaLock />, name: "هذا النص يتم استبداله:", description: "هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله" },
      ];
  return (
                <ShowAkarLaw
                    title={t("law.details.examples")}
                    description=" هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله"
                    image={AkarLawImage}
                    Features={Features}
                    isTitleLeft={false} 
                    />
  )
}

export default LawExamples
