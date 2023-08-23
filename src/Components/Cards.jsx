// card.jsx
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";
import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = ({ movie }) => {
  return (
    <Grow in={true}>
      <Link to={`/details/${movie.id}`} style={{ textDecoration: "none" }}>
        <div className="card-container">
          <Card
            className="card"
            style={{
              boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)",
              borderRadius: "10px",
            }}
          >
            <CardMedia
              component="img"
              className="card-media"
              sx={{ height: 200 }}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              title={movie.title}
            />

            <CardContent className="card-content">
              <Typography variant="h5" className="title">
                <span>{movie.title}</span>{" "}
                <span className="rating">{movie.vote_average}/10</span>
              </Typography>

              <Typography
                variant="body2"
                className="overview"
                color="text.secondary"
              >
                {movie.overview}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Link>
    </Grow>
  );
};

export default Cards;
