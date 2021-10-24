import React from "react";
import Slideshow from "../slide-show/Slideshow";
import "./MainContent.scss";

const MainContent = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" },
    { url: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" },
    { url: "https://i.redd.it/t2rgdkd42rf71.jpg" }
  ];
  return (
    <div className="main-content">
      <Slideshow currentSlide={0} images={images} auto={true} />
      {/* Slidshow component */}
      <div className="grid-movie-title">
        <div className="movieType">Now Playing </div>
        <div className="paginate">Paginate </div>
      </div>
      {/* Display Grid component */}
    </div>
  );
};

export default MainContent;
