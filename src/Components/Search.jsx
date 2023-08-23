import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#2c3e50",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },

  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "full",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

export default function SearchBar({ onSearch, showBackIcon }) {
  const [search, setSearch] = useState("");
  const handleSearchChage = (event) => {
    const query = event.target.value;
    setSearch(query);
    onSearch(query);
  };

  return (
    <Box
      sx={{
        flexGrow: 2,
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#2c3e50",
          borderRadius: "10px",
        }}
      >
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <HomeIcon color="white" />
          </Link>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            
            <StyledInputBase
              sx={{ width: "100%" }}
              placeholder="Search for movies..."
              inputProps={{ "aria-label": "search" }}
              value={search}
              onChange={handleSearchChage}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
