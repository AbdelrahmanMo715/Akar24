import { t } from "i18next"
import financeImg from "../../assets/financeImage2.png";
import FinancingTextImg from "../TextImg/FinancingTextImg";

function FinancingFeatures() {
  return (
    <FinancingTextImg
         imageSrc={financeImg}
         title={t("financing.details.features")}
         list={["هذا النص يتم استبداله","هذا النص يتم استبداله هذا النص يتم استبداله","هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله"]}
         isImgLeft={false}
         />
  )
}

export default FinancingFeatures
