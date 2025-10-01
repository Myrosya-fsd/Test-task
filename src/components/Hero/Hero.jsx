import { useState } from "react";
import styles from "./Hero.module.css";

const slides = [
  {
    id: 1,
    title: "Test slider",
    img: "/img/Slider-1.jpg",
  },
  {
    id: 2,
    title: "Test slider",
    img: "/img/Slider-2.jpg",
  },
  {
    id: 3,
    title: "Test slider",
    img: "/img/Slider-1.jpg",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.hero}>
      <h1 className={styles.logo}>Logo company</h1>
      <div
        className={styles.slide}
        style={{ backgroundImage: `url(${slides[current].img})` }}
      >
        <svg className={`${styles.icon} Arrow-left`} onClick={prevSlide}>
          <use xlinkHref="/img/symbol-defs.svg#icon-Arrow-left" />
        </svg>
        <svg className={`${styles.icon} Arrow-right`} onClick={nextSlide}>
          <use xlinkHref="/img/symbol-defs.svg#icon-Arrow-right" />
        </svg>
      </div>
      <div className={styles.detector}>
        <svg className={`${styles.union} Union`}>
          <use xlinkHref="/public/img/symbol-defs.svg#icon-Union" />
        </svg>
        <div className={styles.line}></div>
        <svg className={`${styles.clover} Clover`}>
          <use xlinkHref="/public/img/symbol-defs.svg#icon-Clover" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
