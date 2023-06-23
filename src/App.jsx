import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Box } from "@mui/material";
import Feed from "./Components/Feed";
import VideoDetail from "./Components/VideoDetail";
import ChannelDetail from "./Components/ChannelDetail";
import SearchFeed from "./Components/SearchFeed";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  let [mode, setMode] = useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: mode ? "light" : "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{}}>
          <Navbar
            toggle={(md) => {
              setMode(md);
            }}
            mode={mode}
          ></Navbar>
          <Routes>
            <Route path=""  element={<Feed mode={mode}/> }></Route>
            <Route
              path="/video/:id"
              element={<VideoDetail ></VideoDetail>}
            ></Route>
            <Route
              path="/channel/:id"
              element={<ChannelDetail></ChannelDetail>}
            ></Route>
            <Route
              path="/search/:searchTerm"
              element={<SearchFeed></SearchFeed>}
            ></Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
