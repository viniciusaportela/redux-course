import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MoviesList = () => {
  const { moviesList } = useSelector((state) => ({ ...state.movie }));

  return (
    <div>
      <Grid sx={{ flexGrow: 1 }} container>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={3}>
            {moviesList &&
              moviesList.Search.map((item) => (
                <Grid item key={item.imdbID}>
                  <Card sx={{ maxWidth: "350px" }}>
                    <Link to={`/movie/${item.imdbID}`}>
                      <CardMedia component="img" image={item.Poster} />
                      <CardContent>
                        <Typography variant="body2" color="text.primary">
                          {item.Title}
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                          ({item.Year})
                        </Typography>
                      </CardContent>
                    </Link>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MoviesList;
