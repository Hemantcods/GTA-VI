import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  }); 
  useGSAP(() => {
    if(!showContent) return;
    gsap.to(".main",{
      scale:1,
      rotate:0,
      duration:2,
      ease:"expo.inOut",
      delay:-1
    })
    gsap.to(".sky",{
      scale:1.2,
      rotate:0,
      duration:2,
      ease:"expo.inOut",
      delay:-.8
    })
    gsap.to(".bg",{
      scale:1.2,
      rotate:0,
      duration:2,
      ease:"expo.inOut",
      delay:-.8
    })
    gsap.to(".boy",{
      scale:0.9,
      rotate:0,
      x:"-50%",
      bottom:"-50%",
      duration:2,
      ease:"expo.inOut",
      delay:-.8
    })
    gsap.to(".text",{
      scale:1,
      rotate:0,
      duration:2,
      ease:"expo.inOut",
      delay:-.8
    })
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function (e) {
      console.log(e.clientX, e.clientY);
      const XMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", {
        x: `${XMove * 0.5}}`,
      });
      gsap.to(".imagesdiv .sky", {
        x: `${XMove}`,
      });
      gsap.to(".imagesdiv .bg", {
        x: `${XMove * 1.7}`,
      });
    });
  }, [showContent]);
  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-100 w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7] ">
          <div className="landing w-full h-screen relative bg-black overflow-hidden">
            <div className="navbar absolute top-0 left-0 z-10 w-full py-10 px-10 ">
              <div className="logo flex gap-10">
                <div className="lines flex flex-col gap-1">
                  <div className="line w-10 h-1 bg-white"></div>
                  <div className="line w-7 h-1 bg-white"></div>
                  <div className="line w-5 h-1 bg-white"></div>
                </div>
                <h3 className="text-3xl text-white -mt-2.5">Rockstar</h3>
              </div>
            </div>
            <div className="imagesdiv w-full h-screen relative overflow-hidden">
              <img
                className="sky scale-[1.5] rotate-[-20deg] absolute top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
              />
              <img
                className="bg scale-[1.7] rotate-[-5deg] absolute top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
              />
              <div className="text text-white flex flex-col gap-3 absolute top-0 left-1/2 -translate-x-1/2  scale-[1.4] rotate-[-10deg] ">
                <h1 className="text-9xl leading-none -ml-40">grand</h1>
                <h1 className="text-9xl leading-none ml-20">theft</h1>
                <h1 className="text-9xl leading-none -ml-40">auto</h1>
              </div>
              <img
                className="boy absolute -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]"
                src="./boy.png"
              />
            </div>
            <div className="bottom absolute bottom-0  left-0 w-full py-10 px-10 bg-linear-to-t from-black to-transparent">
              <div className="flex gap-4 text-white items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[helvetica-now-display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 "
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-screen bg-black flex px-10 items-center justify-center">
            <div className="cntnr w-full h-[80%] flex text-white ">
              <div className="limg relative w-1/2 h-full">
                <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./imag.png" alt="" />
              </div>
              <div className="rmg relative w-[40%] h-full ">
                <h1 className="text-8xl">Still Running,</h1>
                <h1 className="text-8xl">Not Hunting</h1>
                <p className="font-[helvetica-now-display] text-xl mt-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, perferendis nesciunt mollitia quae molestias totam, ut ad, sed optio quis voluptatem sit. Enim!</p>
                <p className="font-[helvetica-now-display] text-xl mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quisquam ducimus illo magni. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi cum nostrum voluptate?</p>
                <p className="font-[helvetica-now-display] text-xl mt-9">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quisquam ducimus illo magni. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi cum nostrum voluptate?</p>
                <button className="bg-yellow-500 px-10 py-10 text-3xl text-black mt-10"> Download Now </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
