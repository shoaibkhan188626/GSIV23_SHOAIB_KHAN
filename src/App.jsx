import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, searchMovies } from "./actions/movieActions";
import SearchBar from "./Components/Search";
import MovieDetails from "./Components/MovieDetails";
import Footer from "./Components/Footer";
import { Container, Typography, Pagination } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Cards from "./Components/Cards";

const App = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieReducer.movies);
  const totalPages = useSelector((state) => state.movieReducer.totalPages);

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showPagination, setShowPagination] = useState(true);

  useEffect(() => {
    if (searchQuery) {
      dispatch(searchMovies(searchQuery, currentPage));
    } else {
      dispatch(fetchMovies(currentPage));
    }
  }, [dispatch, currentPage, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCardClick = () => {
    setShowPagination(false);
  };

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <SearchBar onSearch={handleSearch} showBackIcon={searchQuery} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Typography
                  variant="h6"
                  sx={{ marginBottom: 3, textAlign: "center", marginTop: 2 }}
                >
                  {searchQuery
                    ? `Search results for "${searchQuery}"`
                    : "UPCOMING MOVIES"}
                </Typography>

                <Grid container spacing={3}>
                  {" "}
                  {movies.map((movie) => (
                    <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                      <Cards movie={movie} onClick={handleCardClick} />
                    </Grid>
                  ))}
                </Grid>

                {showPagination && (
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={(event, value) => setCurrentPage(value)}
                    sx={{
                      marginTop: 2,
                      display: "flex",
                      justifyContent: "center",
                      color: "#2c3e50",
                    }}
                  />
                )}
              </>
            }
          />
          <Route
            path="/details/:id"
            element={
              <MovieDetails
                movie={movies}
                onBack={() => setShowPagination(true)}
              />
            }
          />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
