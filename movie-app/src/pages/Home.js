import React from "react";
import MoviesList from "../components/MoviesList";
import Search from "../components/Search";

const HomePage = () => {
  return (
    <>
      <Search />
      <MoviesList />
    </>
  );
};

export default HomePage;
