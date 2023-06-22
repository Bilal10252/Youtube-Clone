import { Box, IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { Search } from "@mui/icons-material"; 
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    let [search, setSearch] = useState("");
    let navigate = useNavigate();
    let handleSubmit = (e) => {
        e.preventDefault();
        if(search){
            navigate(`/search/${search}`);
            setSearch("");
        }
        
        
    }
  return (
    <Paper
      elevation={1}
      component="form"
      onSubmit={handleSubmit}
      sx={{
        border: "1px solid #e3e3e3",
        borderRadius: "20px",
        pl: 2,
        background:"white",
         mr: { sm: 5 },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <input className="search-bar" value={search} onChange={(event) => {setSearch(event.target.value)}} ></input>
      <IconButton type="submit" sx={{pl: "10px", color: "red"}} ><Search></Search></IconButton>
      </Box>
      
    </Paper>
  );
};

export default SearchBar;
