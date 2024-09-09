import { t } from "i18next"
import TextImg from "../TextImg/FinancingTextImg"
import financeImg from "../../assets/financeImage2.png";
import FinancingTextImg from "../TextImg/FinancingTextImg";

function FinancingTips() {
  return (
    <FinancingTextImg
         imageSrc={financeImg}
         title={t("financing.details.Tips")}
         list={["هذا النص يتم استبداله","هذا النص يتم استبداله هذا النص يتم استبداله","هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله"]}
         isImgLeft={false}
         />
  )
}

export default FinancingTips
