import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const carRef = useRef(null);
  const roadRef = useRef(null);
  const textRef = useRef(null);
  const boxesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // 🚗 Road always moving
     gsap.to(roadRef.current, {
  x: "-50%",
  duration: 10,
  repeat: -1,
  ease: "none"
});

      // 🧠 Main Scroll Timeline
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: sectionRef.current,
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true,
    anticipatePin: 1
  }
});

// 🚗 Car drives full timeline (duration 5)
tl.to(carRef.current, {
  x: window.innerWidth - carRef.current.offsetWidth - 50,
  ease: "none",
  duration: 5
}, 0);

// ✨ Text starts when car is around middle (at 2 seconds)
tl.fromTo(textRef.current,
  { opacity: 0, y: 100 },
  { opacity: 1, y: 0, duration: 1.2 },
  2
);

// 📦 Boxes appear slightly after text
tl.fromTo(boxesRef.current.children,
  { opacity: 0, y: 200 },
  { opacity: 1, y: 0, stagger: 0.2, duration: 1 },
  2.3
);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={sectionRef}>

      {/* Scene */}
      <div className="scene">
        <div className="sun"></div>
        <img
          ref={carRef}
          src="/car.png"
          alt="car"
          className="car"
        />
        

        <div className="road">
          <div className="road-lines" ref={roadRef}></div>
        </div>
      </div>

      {/* Text */}
      <div className="welcome" ref={textRef}>
        <h1>WELCOME TO ITZFIZZ</h1>
      </div>

      {/* Boxes */}
      <div className="boxes" ref={boxesRef}>
        <div className="box">58% Increase</div>
        <div className="box">27% Efficiency</div>
        <div className="box">40% Reduced Calls</div>
      </div>

    </section>
  );
}