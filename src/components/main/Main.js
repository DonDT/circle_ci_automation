import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import MainContent from "../content/main-content/MainContent";
import Spinner from "../spinner/Spinner";
import PropTypes from "prop-types";
import { loadMoreMovies, setResponsePageNumber } from "../../redux/actions/movies";
import "./Main.scss";

const Main = (props) => {
  const { loadMoreMovies, page, totalPages, setResponsePageNumber } = props;
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(page);
  const mainRef = useRef();
  const bottomLineRef = useRef();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  //
  useEffect(() => {
    setResponsePageNumber(currentPage, totalPages);
    loadMoreMovies("now_playing", currentPage);
    // Load more movies whenever page is incremented.
  }, [currentPage]);
  //
  const fetchData = () => {
    if (page < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleScroll = () => {
    const containerHeight = mainRef.current.getBoundingClientRect().height;
    // const {height} = mainRef.current.getBoundingClientRect()
    const { top: bottomLineTop } = bottomLineRef.current.getBoundingClientRect();
    // The div at the bottom current is not revealed until we scroll to the bottom
    // then the height had a value, thus the expression below triggers. Otherwise
    // The height of the bottom div is undefined and expression is not triggered
    if (bottomLineTop <= containerHeight) {
      // Fetch data
      fetchData();
    }
  };

  return (
    <div className="main" onScroll={() => handleScroll()} ref={mainRef}>
      {loading ? <Spinner /> : <MainContent />}
      <div ref={bottomLineRef}></div>
    </div>
  );
};

Main.propTypes = {
  list: PropTypes.array,
  page: PropTypes.number,
  totalPages: PropTypes.number,
  loadMoreMovies: PropTypes.func,
  setResponsePageNumber: PropTypes.func
};

const mapStateToProps = (state) => ({
  list: state.movies.list,
  page: state.movies.page,
  totalPages: state.movies.totalPages
});

export default connect(mapStateToProps, { loadMoreMovies, setResponsePageNumber })(Main);
