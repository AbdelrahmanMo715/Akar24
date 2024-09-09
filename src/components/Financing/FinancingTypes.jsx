import { t } from "i18next"
import financeImg from "../../assets/financeImage2.png";
import FinancingTextImg from "../TextImg/FinancingTextImg";

function FinancingTypes() {
  return (
    <FinancingTextImg
    imageSrc={financeImg}
    title={t("financing.details.Types")}
    list={["هذا النص يتم استبداله","هذا النص يتم استبداله هذا النص يتم استبداله","هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله"]}
    isImgLeft={true}
    />
  )
}

export default FinancingTypes
