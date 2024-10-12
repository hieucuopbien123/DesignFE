import { useParallax } from "react-scroll-parallax";
import Top from "./Top";

const App = () => {
  const parallax = useParallax({
    translateX: [-20, 20], 
    opacity: [0.01, 0.1],
    easing: "easeOut",
  });
  return (
    <>
      <div className="toptextcontainer">
        <div className="fadeIn nametext">Ryan Nguyen</div>
        <div className="underline fadeIn2 jobtext">BE developer</div>
      </div>
      <div style={{height: "100vh"}}>
        <div style={{position: "relative"}}>
          <div ref={parallax.ref as React.RefObject<HTMLDivElement>} className="textaboutme">ABOUT ME</div>
        </div>
        <div style={{display: "flex", justifyContent: "flex-end", alignItems: "flex-end", height: "200px"}} className="scroll-reveal">
          <p className="firstdetailtext">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere at similique magnam nobis eius consequuntur quae debitis nisi, tempora repellendus.
            </span>
          </p>
          <div style={{width: "10%"}}></div>
        </div>
      </div>
      <Top/>
    </>
  )
}

export default App;
