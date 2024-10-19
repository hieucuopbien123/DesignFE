import { Fragment, useInsertionEffect, useRef, useState } from 'react';
import phone1 from "./assets/phone1.png";
import phone2 from "./assets/phone2.png";
import phone3 from "./assets/phone3.png";
import phone4 from "./assets/phone4.png";
import { useParallax } from 'react-scroll-parallax';

interface StaticDataItem {
  a: string;
  b: string;
  c: string[];
  d: string;
  e: string;
}

const staticData: StaticDataItem[] = [
  {
    a: "01",
    b: "NextJS",
    c: ["Fullstack", "ThreeJS"],
    d: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates maiores nemo et, laudantium possimus inventore.",
    e: "Frontend"
  },
  {
    a: "02",
    b: "ReactJS",
    c: ["Frontend"],
    d: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates maiores nemo et, laudantium possimus inventore.",
    e: "Backend"
  },
  {
    a: "03",
    b: "VueJS",
    c: ["Fullstack", "ThreeJS"],
    d: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates maiores nemo et, laudantium possimus inventore.",
    e: "Frontend"
  },
]

const Top = () => {
  const [data, setData] = useState<StaticDataItem>(staticData[0]);
  const useTestHook = () => {
    const ref = useRef<HTMLDivElement>(null);
    
    useInsertionEffect(() => {
      let a = -1000;
      function calculateScrollPercentage() {
        const rect = ref?.current?.getBoundingClientRect();
        const elementHeight = rect?.height ?? 0;
        const x = -(rect?.top ?? 0) / (elementHeight - window.innerHeight) * 100;
        if(x < -70 || x > 150) return;
        console.log(x);
        if(a < 110 && x > 110){
          document.getElementById("showfirsttop")?.classList?.remove('showfirsttop');
        }
        if(a < 65 && x > 65){
          document.getElementById("showfirsttop")?.classList?.remove('showfirsttop');
          void document.getElementById("showfirsttop")?.offsetHeight;
          document.getElementById("showfirsttop")?.classList?.add('showfirsttop');
          setData(staticData[2]);
        } else if(a < 11 && x > 11){
          document.getElementById("showfirsttop")?.classList?.remove('showfirsttop');
          void document.getElementById("showfirsttop")?.offsetHeight;
          document.getElementById("showfirsttop")?.classList?.add('showfirsttop');
          setData(staticData[1]);
        } else if(a < -20 && x > -20){
          document.getElementById("showfirsttop")?.classList?.remove('showfirsttop');
          void document.getElementById("showfirsttop")?.offsetHeight;
          document.getElementById("showfirsttop")?.classList?.add('showfirsttop');
          setData(staticData[0]);
        } else if(a > -20 && x < -20){
          document.getElementById("showfirsttop")?.classList?.remove('showfirsttop');
        } else if(a > 11 && x < 11){
          document.getElementById("showfirsttop")?.classList?.remove('showfirsttop');
          void document.getElementById("showfirsttop")?.offsetHeight;
          document.getElementById("showfirsttop")?.classList?.add('showfirsttop');
          setData(staticData[0]);
        } else if(a > 65 && x < 65){
          document.getElementById("showfirsttop")?.classList?.remove('showfirsttop');
          void document.getElementById("showfirsttop")?.offsetHeight;
          document.getElementById("showfirsttop")?.classList?.add('showfirsttop');
          setData(staticData[1]);
        } else if(a > 110 && x < 110){
          document.getElementById("showfirsttop")?.classList?.remove('showfirsttop');
          void document.getElementById("showfirsttop")?.offsetHeight;
          document.getElementById("showfirsttop")?.classList?.add('showfirsttop');
        }
        a = x;
      }
      window.addEventListener('scroll', calculateScrollPercentage);
      return () => {
        window.removeEventListener("scroll", calculateScrollPercentage);
      }
    }, []);
  
    return { ref };
  }
  const { ref } = useTestHook();

  const parallax = useParallax({
    translateY: [50, -30],
    easing: "easeOut",
  });
  const parallax1 = useParallax({
    translateY: [50, 0],
    easing: "easeOut",
  });
  const parallax2 = useParallax({
    translateY: [200, 80],
    translateX: [10, 10],
    easing: "easeOut",
  });
  const parallax3 = useParallax({
    translateY: [200, 100],
    translateX: [-10, -10],
    easing: "easeOut",
  });
  const parallax01 = useParallax({
    translateY: [0, -80],
    easing: "easeOut",
  });
  const parallax11 = useParallax({
    translateY: [0, -50],
    easing: "easeOut",
  });
  const parallax21 = useParallax({
    translateY: [150, 30],
    translateX: [10, 10],
    easing: "easeOut",
  });
  const parallax31 = useParallax({
    translateY: [150, 50],
    translateX: [-10, -10],
    easing: "easeOut",
  });
  const parallax02 = useParallax({
    translateY: [0, -80],
    easing: "easeOut",
  });
  const parallax12 = useParallax({
    translateY: [0, -50],
    easing: "easeOut",
  });
  const parallax22 = useParallax({
    translateY: [150, 30],
    translateX: [10, 10],
    easing: "easeOut",
  });
  const parallax32 = useParallax({
    translateY: [150, 50],
    translateX: [-10, -10],
    easing: "easeOut",
  });
  const parallax03 = useParallax({
    translateY: [0, -80],
    easing: "easeOut",
  });
  const parallax13 = useParallax({
    translateY: [0, -50],
    easing: "easeOut",
  });
  const parallax23 = useParallax({
    translateY: [150, 30],
    translateX: [10, 10],
    easing: "easeOut",
  });
  const parallax33 = useParallax({
    translateY: [150, 50],
    translateX: [-10, -10],
    easing: "easeOut",
  });
  return (
    <>
      <div className="top-container">
        <div id="showfirsttop" style={{paddingBottom: "50px", paddingTop: "50px", position: "sticky", height: "100vh", top: 0, color: "transparent"}}>
          <div style={{display: "flex", flexDirection: "column", height: "100%", gap: "50px", width: "50%"}}>
            <span className="top-numbertext">{data.a}</span>
            <div style={{flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center"}}>
              <span className="top-headertext">{data.b}</span>
              <div style={{paddingTop: "30px"}}></div>
              <div style={{display: "flex", gap: "20px", flexWrap: "wrap", width: "fit-content"}}>
                <span className="top-numbertext">{data.c[0]}</span>
                {
                  data.c.slice(1).map((x: string, index: number) => (
                    <Fragment key={index}>
                      <span className="top-numbertext" style={{lineHeight: "20px"}}>.</span>
                      <span className="top-numbertext">{x}</span>
                    </Fragment>
                  ))
                }
              </div>
              <div style={{paddingTop: "10px"}}></div>
              <span className="top-detailtext">
                {data.d}
              </span>
            </div>
            <span className="top-numbertext">{data.e}</span>
          </div>
        </div>
        <div ref={ref} style={{height: "450vh"}}></div>
        <div style={{display: "flex", justifyContent: "flex-end", flexWrap: "wrap", position: "absolute", top: 0, width: "-webkit-fill-available"}}>
          <div style={{width: "45%", position: "relative", overflowX: "clip", marginRight: "2%"}}>
            <div>
              <div ref={parallax.ref as React.RefObject<HTMLDivElement>} style={{width: "45%", position: "absolute"}}><img style={{width: "100%"}} src={phone1}/></div>
              <div ref={parallax1.ref as React.RefObject<HTMLDivElement>} style={{width: "40%", position: "absolute", right: 0, top: "20%"}}><img style={{width: "100%"}} src={phone2}/></div>
              <div ref={parallax2.ref as React.RefObject<HTMLDivElement>} style={{width: "35%", position: "absolute"}}><img style={{width: "100%"}} src={phone3}/></div>
              <div ref={parallax3.ref as React.RefObject<HTMLDivElement>} style={{width: "30%", position: "absolute", right: 0}}><img style={{width: "100%"}} src={phone4}/></div>
            </div>
            <div style={{position: "absolute", top: "150vh", left: 0, right: 0}}>
              <div style={{position: "relative"}}>
                <div ref={parallax01.ref as React.RefObject<HTMLDivElement>} style={{width: "45%", position: "absolute"}}><img style={{width: "100%"}} src={phone1}/></div>
                <div ref={parallax11.ref as React.RefObject<HTMLDivElement>} style={{width: "40%", position: "absolute", right: 0, top: "20%"}}><img style={{width: "100%"}} src={phone2}/></div>
                <div ref={parallax21.ref as React.RefObject<HTMLDivElement>} style={{width: "35%", position: "absolute"}}><img style={{width: "100%"}} src={phone3}/></div>
                <div ref={parallax31.ref as React.RefObject<HTMLDivElement>} style={{width: "30%", position: "absolute", right: 0}}><img style={{width: "100%"}} src={phone4}/></div>
              </div>
            </div>
            <div style={{position: "absolute", top: "300vh", left: 0, right: 0}}>
              <div style={{position: "relative"}}>
                <div ref={parallax02.ref as React.RefObject<HTMLDivElement>} style={{width: "45%", position: "absolute"}}><img style={{width: "100%"}} src={phone1}/></div>
                <div ref={parallax12.ref as React.RefObject<HTMLDivElement>} style={{width: "40%", position: "absolute", right: 0, top: "20%"}}><img style={{width: "100%"}} src={phone2}/></div>
                <div ref={parallax22.ref as React.RefObject<HTMLDivElement>} style={{width: "35%", position: "absolute"}}><img style={{width: "100%"}} src={phone3}/></div>
                <div ref={parallax32.ref as React.RefObject<HTMLDivElement>} style={{width: "30%", position: "absolute", right: 0}}><img style={{width: "100%"}} src={phone4}/></div>
              </div>
            </div>
            <div style={{position: "absolute", top: "450vh", left: 0, right: 0}}>
              <div style={{position: "relative"}}>
                <div ref={parallax03.ref as React.RefObject<HTMLDivElement>} style={{width: "45%", position: "absolute"}}><img style={{width: "100%"}} src={phone1}/></div>
                <div ref={parallax13.ref as React.RefObject<HTMLDivElement>} style={{width: "40%", position: "absolute", right: 0, top: "20%"}}><img style={{width: "100%"}} src={phone2}/></div>
                <div ref={parallax23.ref as React.RefObject<HTMLDivElement>} style={{width: "35%", position: "absolute"}}><img style={{width: "100%"}} src={phone3}/></div>
                <div ref={parallax33.ref as React.RefObject<HTMLDivElement>} style={{width: "30%", position: "absolute", right: 0}}><img style={{width: "100%"}} src={phone4}/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{height: "50vh"}}></div>
      <div style={{display: "flex", justifyContent: "space-between", padding: "50px 15vw", minHeight: "100vh", alignItems: "center", gap: "20px", flexWrap: "wrap"}}>
        <ul>
          <li>HTML & CSS</li>
          <li>ReactJS</li>
          <li>NextJS</li>
        </ul>
        <ul>
          <li>MongoDB</li>
          <li>Figma</li>
          <li>Github</li>
        </ul>
      </div>
    </>
  )
}

export default Top;
