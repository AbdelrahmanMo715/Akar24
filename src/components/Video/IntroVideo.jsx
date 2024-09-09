import Title from "../Title/Title"
function IntroVideo({title,description,videoSource}) {
  return (
    <>
    <Title
    h2={title}
    p={description}
    
    />
    {/*<video src={videoSource} className="w-full mt-8" controls /> */}
      <img src={videoSource} className="w-full mt-8"/>
    </>
  )
}

export default IntroVideo
