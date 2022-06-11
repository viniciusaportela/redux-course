import React from "react";
import { fetchSearchCocktail } from "../../redux/slices/cocktailSlice";
import { useDispatch } from "react-redux";
import "./SearchInput.css";

const SearchInput = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const searchText = event.target.value;
    dispatch(fetchSearchCocktail(searchText));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="section search">
      <form action="" className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search Cocktail</label>
          <input type="text" name="name" id="name" onChange={handleChange} />
        </div>
      </form>
    </section>
  );
};

export default SearchInput;
