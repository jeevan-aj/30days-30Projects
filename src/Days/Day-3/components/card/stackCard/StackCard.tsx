import { useEffect, useRef, useState } from "react";
import Card from "../card/Card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import style from "./StackCard.module.css";
import { cardsData, TCardsData } from "../../../data/data";

const StackCard = () => {
  const containerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top", // Start when container reaches top of viewport
      end: "bottom top", // End when the bottom of container reaches the top
      scrub: 1, // Smooth transition
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      },
    });

    return () => scrollTrigger.kill(); // Cleanup on unmount
  }, []);

  return (
    <div className={`${style.stackCardWrapper}`}>
      <div className={`${style.stackCardContainer}`} ref={containerRef}>
        {cardsData?.map((cur: TCardsData, idx: number) => {
          const targetScale = 1 - (cardsData.length - idx) * 0.025;
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
//
