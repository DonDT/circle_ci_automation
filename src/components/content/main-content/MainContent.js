import React, { useState, useEffect } from "react";
import Slideshow from "../slide-show/Slideshow";
import Paginate from "../paginate/paginate";
import Grid from "../grid/Grid";
import "./MainContent.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { IMAGE_URL } from "../../../services/movies.services";

const MainContent = (props) => {
  const { list, movieType } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState([]);

  const randomMovies = list.sort(() => Math.random() - Math.random()).slice(0, 4);

  useEffect(() => {
    if (randomMovies.length) {
      const IMAGES = [
        {
          id: 1,
          url: `${IMAGE_URL}/${randomMovies[0].backdrop_path}`
        },
        {
          id: 2,
          url: `${IMAGE_URL}/${randomMovies[1].backdrop_path}`
        },
        {
          id: 3,
          url: `${IMAGE_URL}/${randomMovies[2].backdrop_path}`
        },
        {
          id: 4,
          url: `${IMAGE_URL}/${randomMovies[3].backdrop_path}`
        }
      ];
      setImages(IMAGES);
    }
  }, []);

  const paginate = (type) => {
    if (type === "prev" && currentPage >= 1) {
      setCurrentPage((prev) => prev - 1);
    } else setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="main-content">
      <Slideshow currentSlide={0} images={images} auto={false} />
      {/* Slidshow component */}
      <div className="grid-movie-title">
        <div className="movieType"> {movieType} </div>
        <div className="paginate">
          <Paginate paginate={paginate} currentPage={currentPage} totalPages={10} />
        </div>
      </div>
      {/* Display Grid component */}
      <Grid />
    </div>
  );
};

MainContent.propTypes = {
  list: PropTypes.array.isRequired,
  movieType: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  list: state.movies.list,
  movieType: state.movies.movieType
});

export default connect(mapStateToProps, {})(MainContent);
