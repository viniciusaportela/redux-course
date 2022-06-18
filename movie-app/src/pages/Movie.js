import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMovie } from "../redux/slices/movieSlice";
import useStyles from "../styles";

const MoviePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { id } = useParams();

  const { movie } = useSelector((state) => ({ ...state.movie }));

  useEffect(() => {
    if (id) {
      dispatch(getMovie(id));
    }
  }, [id]);

  return (
    <section className={classes.section}>
      <img src={movie.Poster} alt={movie.Title} />
      <div>
        <Typography align="left" variant="h3" gutterBottom component="h2">
          {movie.Title}
        </Typography>
        <Typography align="left" variant="h5" gutterBottom component="h5">
          Year: {movie.Year}
        </Typography>
        <Typography align="left" variant="body1" gutterBottom component="p">
          {movie.Plot}
        </Typography>
        <Typography align="left" variant="h6" gutterBottom component="h6">
          Director: {movie.Director}
        </Typography>
        <Button variant="contained" onClick={() => navigate("/")}>
          Go Back
        </Button>
      </div>
    </section>
  );
};

export default MoviePage;
