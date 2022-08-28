import { createTheme } from "@material-ui/core/styles"

const mainBlack = "#212121"
const mainWhite = "#8acedb"
const blue = "#757ce8"
// Create a theme instance.
const theme = createTheme({
  palette: {
    common: {
      black: mainBlack,
      white: mainWhite,
      blue: blue,
    },
    primary: {
      main: "#8acedb",
        light: "white",
        dark: "#2e973e",
    },
    secondary: {
      main: "#f04328",
    },
    info: {
      main: blue,
    },
  },
  typography: {
    h1: {
      fontSize: "2.25rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    a: {
      color: mainBlack,
    },
  },
})

export default theme


 // const darkTheme = createTheme({
  //   palette: {
  //     mode: mode,
  //     primary: {
        
  //     },
  //     secondary: {
  //       main: "#f04328",
  //     },
  //   },
  // })