import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMoviesCast } from "../actions/movieActions";
import { Typography, CardMedia, CardContent, Grow, Grid } from "@mui/material";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const cast = useSelector((state) => state.movieReducer.cast);
  const movies = useSelector((state) => state.movieReducer.movies);
  const director = useSelector((state) => state.movieReducer.director);
  const runtime = useSelector((state) => state.movieReducer.formattedRuntime);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMoviesCast(id));
  }, [dispatch, id]);

  const selectedMovie = movies.find((movie) => movie.id === parseInt(id, 10));
  const maxActorsToShow = 5;
  const limitedCast = cast && cast ? cast.slice(0, maxActorsToShow) : [];

  return (
    <div>
      {selectedMovie && (
        <Grow in={true}>
          <Grid container spacing={2} sx={{ marginBottom: "10px" }}>
            <Grid item xs={12} md={4}>
              <CardMedia
                style={{
                  height: "400px",
                  width: "300px",
                  objectFit: "cover",
                  marginTop: "25px",
                  borderRadius: "10%",
                  boxShadow: "2px 2px 10px rgba(0, 0, 0, 1)",
                }}
                component="img"
                image={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
                alt={`${selectedMovie.title} Poster`}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" sx={{ marginTop: "20px" }}>
                {selectedMovie.title}
              </Typography>

              <Typography variant="h6">
                Director :{" "}
                {director
                  ? director.name
                  : "Director information not available"}
              </Typography>

              <Typography variant="h6">
                Release Date: {selectedMovie.release_date}
              </Typography>

              <Typography variant="h6">Watch Time : {runtime}</Typography>

              <Typography variant="h6">
                Rating: {selectedMovie.vote_average}/10
              </Typography>

              <Typography variant="body1">
                Overview: {selectedMovie.overview}
              </Typography>

              <CardContent>
                <Typography variant="h6">Cast:</Typography>

                {limitedCast.map((actor) => (
                  <Typography key={actor.id}>
                    {actor.name} as {actor.character},
                  </Typography>
                ))}
              </CardContent>
            </Grid>
          </Grid>
        </Grow>
      )}
    </div>
  );
};

export default MovieDetails;
