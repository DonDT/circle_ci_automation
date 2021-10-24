import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Slideshow.scss";

// check prettier formating, terminal
// npm run prettier:check => this check
// npm run prettier:write => this fixes the formatting

const Slideshow = ({ images, auto }) => {
  const [state, setState] = useState({ slideShow: images[0], slideIndex: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const { slideShow, slideIndex } = state;
  //
  const [slideInterval, setSliderInterval] = useState(0);
  let currentSlideIndex = 0;
  //
  useEffect(() => {
    // just automatically render the carousel
    if (auto) {
      const timeInterval = setInterval(() => {
        autoMoveSlide();
      }, 5000);
      setSliderInterval(timeInterval);

      // clear the interval
      return () => {
        clearInterval(timeInterval);
        clearInterval(slideInterval);
      };
    }
  }, []);
  // eslint-disable-next-line

  // currentSlideIndex is declared once
  const autoMoveSlide = () => {
    currentSlideIndex = currentSlideIndex + 1 >= images.length ? 0 : currentSlideIndex + 1;

    setState((prev) => ({
      ...prev,
      slideShow: images[currentSlideIndex],
      slideIndex: currentSlideIndex
    }));
  };

  const moveSlideWithArrows = (type) => {
    let index = currentIndex;
    if (type === "prev") {
      if (currentIndex <= 0) index = images.length - 1;
      else index -= 1;
    } else if (type === "next") {
      if (currentIndex >= images.length - 1) index = 0;
      else index += 1;
    }
    setCurrentIndex(index);
    setState((prev) => ({
      ...prev,
      slideShow: images[index],
      slideIndex: index
    }));
  };

  const Indicators = (currentSlide) => {
    const listIndicators = images.map((slide, i) => {
      const btnClasses = i === currentSlide.currentSlide ? "slider-navButton slider-navButton--active" : "slider-navButton";
      return <button key={i} className={btnClasses} />;
    });
    return <div className="slider-nav">{listIndicators}</div>;
  };

  const RenderArrows = () => {
    return (
      <div className="slider-arrows">
        <div className="slider-arrow slider-arrow--left" onClick={() => moveSlideWithArrows("prev")} />
        <div className="slider-arrow slider-arrow--right" onClick={() => moveSlideWithArrows("next")} />
      </div>
    );
  };
  return (
    <div className="slider">
      <div className="slider-slides">{images && images.length && slideShow && <div className="slider-image" style={{ backgroundImage: `url(${slideShow.url})` }}></div>}</div>
      <Indicators currentSlide={slideIndex} />
      {!auto ? <RenderArrows /> : null}
    </div>
  );
};

Slideshow.propTypes = {
  images: PropTypes.array.isRequired,
  auto: PropTypes.bool.isRequired,
  currentSlide: PropTypes.number
};

export default Slideshow;
