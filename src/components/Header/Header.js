import { createTheme, TextField, ThemeProvider } from "@mui/material";
import React from "react";
import "./Header.css";
import { debounce } from "lodash";

const Header = ({
    setWord,
    word,
    setMeanings,
    LightTheme,
  }) => {
    const darkTheme = createTheme({
      palette: {
        primary: {
          main: LightTheme ? "#000" : "#fff",
        },
        type: LightTheme ? "light" : "dark",
      },
    });

    const handleChange = (e) => {
        setWord("");
        setMeanings([]);
      };

      const handleText = debounce((text) => {
        setWord(text);
      }, 500);
      return (
        <div className="header">
          <span className="title">{word ? word : "Welcome to SpyGlass"}</span>
          <div className="inputs">
            <ThemeProvider theme={darkTheme}>
              <TextField
                label="Username"
                onChange={(e) => handleText(e.target.value)}/>
              <TextField
                label="Password"
                onChange={(e) => handleChange(e.target.value)}
              >
              </TextField>
            </ThemeProvider>
          </div>
        </div>
      );
    };
    
    export default Header;