
import { useEffect, useRef } from "react";
import style from "./Card.module.css";
import gsap from "gsap";

const Card = ({
  i,
  color,
  targetScale,
  image,
  progress,
}: {
  i: number;
  color: string;
  targetScale: number;
  image: string;
  progress: number;
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const scaleFactor = gsap.utils.mapRange(
      i * 0.25,
      1,
      1,
      targetScale,
      progress
    );

    gsap.to(cardRef.current, {
      scale: scaleFactor,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [progress, i]);

  return (
    <div className={style.cardContainer}>
      <div
        ref={cardRef}
        className={`card  w-[300px] h-[200px] md:w-[500px] md:h-[300px] lg:w-[900px] lg:h-[500px]  ${style.card}`}
        style={{ backgroundColor: color, top: `calc( ${i * 35}px)` }}
      >
        <img
          src={image}
          alt="image"
          style={{ width: "100%", height: "100%", borderRadius: "20px" }}
          className="w-[300px] h-[200px] md:w-[500px] md:h-[300px] lg:w-[900px] lg:h-[500px] "
        />
      </div>
    </div>
  );
};

export default Card;
