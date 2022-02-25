import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import movie_image_placeholder from "../../assets/film_image_placeholder.png";

const LazyImage = (props) => {
  // Children are all the stuff we have ontop of the images
  const { src, alt, children, className } = props;
  const [imageSrc, setImageSrc] = useState(movie_image_placeholder);
  const [imageRef, setImageRef] = useState();

  /*
  The Intersection Observer API lets code register a callback function that is executed whenever an element they wish to monitor enters or exits another element (or the viewport), or when the amount by which the two intersect changes by a requested amount
   */

  useEffect(() => {
    let observer;
    let didCancel = false;
    // when the image is life => imageRef, and image changes, ie imageSrc != src
    if (imageRef && imageSrc !== src) {
      // if intersection is available, create a new instance of it in browser.
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              //
              if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: "75%"
          }
        );
        observer.observe(imageRef);
      } else {
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);

  return (
    <div className={className} ref={setImageRef} style={{ backgroundImage: `url(${imageSrc})` }} alt={alt}>
      {children}
    </div>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.string,
  className: PropTypes.string
};

export default LazyImage;
