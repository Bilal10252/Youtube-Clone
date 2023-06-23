import { Box } from "@mui/material";
import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";
import { Padding } from "@mui/icons-material";
import ColorMode from "./ColorMode";

const Navbar = ({ toggle, mode }) => {
  console.log(mode);
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
        padding: {xs:1, md:2},
        zIndex: "3",
        gap:1,
        
      }}
      backgroundColor={mode ? "white" : "black"}
    >
      <Link to="/">
        <img src={logo} alt="logo" height="45px" />
      </Link>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <SearchBar></SearchBar>
        <ColorMode toggle={toggle}></ColorMode>
      </Box>
    </Stack>
  );
};

export default Navbar;
