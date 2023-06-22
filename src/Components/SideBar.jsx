import { Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { Categories } from "../Utils/Categories";

const SideBar = ({ selectedType, choosenType }) => {
  return (
    <Stack
      direction={"row"}
      sx={{ overflowY: "auto", flexDirection: { md: "column" } }}
    >
      {Categories.map((category) => (
        <button
          key={category.name}
          className="category-btn"
          style={{
            backgroundColor: choosenType === category.name && "red",
            gap: "10px",


          }}
          onClick={() => {
            selectedType(category.name);
            
          }}
        >
          <span
            style={{ color: choosenType === category.name ? "white" : "#6b7280" }}
          >
            {category.icon}
          </span>
          <span style={{  color: choosenType === category.name ? "white" : "#4b5563" }}>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
