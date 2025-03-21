import { useEffect, useRef, useState } from "react";
import Card from "../card/Card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import style from "./StackCard.module.css";
import { cardsData, TCardsData } from "../../../data/data";
import Lenis from "lenis";

const StackCard = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!wrapperRef.current || !containerRef.current) return;

    // Initialize Lenis with the custom scrollable wrapper
    const lenis = new Lenis({
      wrapper: wrapperRef.current, // Attach Lenis to `.stackCardWrapper`
      content: containerRef.current,
      duration: 3, // Smooth scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // GSAP ScrollTrigger Configuration
    ScrollTrigger.scrollerProxy(wrapperRef.current, {
      scrollTop(value) {
        return arguments.length
          ? lenis.scrollTo(value ? value : 0, { immediate: true })
          : lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      scroller: wrapperRef.current, // Make GSAP listen to `.stackCardWrapper`
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      },
    });

    // Animation Frame Loop for Lenis
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      scrollTrigger.kill(); // Cleanup ScrollTrigger
      lenis.destroy(); // Destroy Lenis on unmount
    };
  }, []);

  return (
    <div className={`${style.stackCardWrapper}`} ref={wrapperRef}>
      <div className={`${style.stackCardContainer}`} ref={containerRef}>
        {cardsData?.map((cur: TCardsData, idx: number) => {
          const targetScale = 1 - (cardsData.length - 1 - idx) * 0.05;
          return (
            <Card
              key={idx}
              i={idx}
              color={cur?.color}
              image={cur?.src}
              targetScale={targetScale}
              progress={scrollProgress}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StackCard;
