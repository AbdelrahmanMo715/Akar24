import { t } from "i18next"
import financeImg from "../../assets/financeImage2.png";
import FinancingTextImg from "../TextImg/FinancingTextImg";

function FinancingSteps() {
  return (
    <FinancingTextImg
         imageSrc={financeImg}
         title={t("financing.details.Steps")}
         list={["هذا النص يتم استبداله","هذا النص يتم استبداله هذا النص يتم استبداله","هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله"]}
         isImgLeft={true}
         listType="ol"
         />
  )
}

export default FinancingSteps
