import React from "react";
import CocktailList from "../../components/CocktailList.js/CocktailList";
import SearchInput from "../../components/SearchInput/SearchInput";

const Home = () => {
  return (
    <div>
      <SearchInput />
      <CocktailList />
    </div>
  );
};

export default Home;
