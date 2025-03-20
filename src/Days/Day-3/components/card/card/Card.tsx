import { useEffect, useRef } from "react";
import style from "./Card.module.css";
import gsap from "gsap";

const Card = ({
  i,
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

    console.log(targetScale, progress, scaleFactor);

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
        className={`card ${style.card}`}
        style={{ top: `calc( ${i * 35}px)` }}
      >
        <img
          src={image}
          alt="image"
          style={{ borderRadius: "20px" }}
          className=" "
        />
      </div>
    </div>
  );
};

export default Card;
