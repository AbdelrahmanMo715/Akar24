import { t } from "i18next"
import Title from "../Title/Title"
import videoEx from "../../assets/Shooting-Aspire-Vero-16-Sapphire-Banner.mp4";
function IntroVideo({title,description,videoSource}) {
  return (
    <>
    <Title
    h2={title}
    p={description}
    
    />
    <video src={videoSource} className="w-full mt-8" controls />
      
    </>
  )
}

export default IntroVideo
