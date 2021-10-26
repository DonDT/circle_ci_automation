import React, { useState } from "react";
import Slideshow from "../slide-show/Slideshow";
import Paginate from "../paginate/paginate";
import Grid from "../grid/Grid";
import "./MainContent.scss";

const MainContent = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80", rating: 7.5 },
    { url: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg", rating: 8.5 },
    { url: "https://i.redd.it/t2rgdkd42rf71.jpg", rating: 9.5 },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIX4fdymadei7FiL-19pxFAWPLEJgQlNEww&usqp=CAU",
      rating: 5.5
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1tq3xaYg_OFU0Rn3_EwCbR_M7_-9aVPaH5g&usqp=CAU",
      rating: 7
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Dui-CG5_VcIxTHxks0tTiME_1rIvYeIfMA&usqp=CAU",
      rating: 5
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (type) => {
    if (type === "prev" && currentPage >= 1) {
      setCurrentPage((prev) => prev - 1);
    } else setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="main-content">
      <Slideshow currentSlide={0} images={images} auto={true} />
      {/* Slidshow component */}
      <div className="grid-movie-title">
        <div className="movieType">Now Playing </div>
        <div className="paginate">
          <Paginate paginate={paginate} currentPage={currentPage} totalPages={10} />
        </div>
      </div>
      {/* Display Grid component */}
      <Grid images={images} />
    </div>
  );
};

export default MainContent;
