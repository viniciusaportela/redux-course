import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/slices/movieSlice";
import useStyles from "../styles";

const Search = () => {
  const [name, setName] = useState("spider");
  const classes = useStyles();

  const {
    movieList: { Error: error },
  } = useSelector((state) => ({ ...state.movie }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [name]);

  return (
    <>
      <h2 className={classes.title}>Movie Search Api</h2>
      <form
        className={classes.form}
        onSubmit={(event) => event.preventDefault()}
      >
        <TextField
          type="text"
          fullWidth
          value={name}
          sx={{ m: 1, width: "55ch" }}
          onChange={(event) => setName(event.target.value)}
        />
        {error && <p className={classes.error}>{error}</p>}
      </form>
    </>
  );
};

export default Search;
