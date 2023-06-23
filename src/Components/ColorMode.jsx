import React from "react";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import { Button, Switch } from "@mui/material";
import { useState } from "react";
const ColorMode = ({ toggle }) => {
  let [toggler, setToggler] = useState(false);
  let handleToggle = () => {
    setToggler(!toggler);
    toggle(toggler);
  };
  return (
    <>
      {toggler ? (
        <Switch
          checked
          onChange={() => {
            handleToggle();
          }}
        ></Switch>
      ) : (
        <Switch
          onChange={() => {
            handleToggle();
          }}
        ></Switch>
      )}
    </>
  );
};

export default ColorMode;
