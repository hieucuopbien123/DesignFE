import { useParallax } from "react-scroll-parallax";
import FirstTop from "./FirstTop";

const App = () => {
  const parallax = useParallax({
    translateX: [-10, 30], 
    opacity: [0.01, 0.1],
    easing: "easeOut",
  });
  return (
    <>
      <div style={{width: "100%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "40px"}}>
        <div style={{fontFamily: "AnandaRegular", fontSize: "100px", height: "150px", display: "flex", alignItems: "center", justifyContent: "center"}} className="fadeIn">Ryan Nguyen</div>
        <div style={{fontSize: "40px", cursor: "pointer"}} className="underline fadeIn2">BE developer</div>
      </div>
      <div style={{height: "80vh"}}>
        <div style={{position: "relative"}}>
          <div ref={parallax.ref as React.RefObject<HTMLDivElement>} style={{fontWeight: "bolder", fontSize: "170px", position: "absolute", transition: "transform 0.5s ease-out 0s"}}>ABOUT ME</div>
        </div>
        <div style={{display: "flex", justifyContent: "flex-end", alignItems: "center", height: "200px"}} className="scroll-reveal">
          <p style={{fontSize: "26px", width: "60%", letterSpacing: "1px"}}>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In adipisci laudantium harum perspiciatis similique commodi animi corrupti officiis, fugit ipsum?
            </span>
          </p>
          <div style={{width: "10%"}}></div>
        </div>
      </div>
      <FirstTop/>
    </>
  )
}

export default App;
