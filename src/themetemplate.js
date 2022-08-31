import { createTheme } from "@material-ui/core/styles"

const mainBlack = "#212121"
const mainTifanny = "#8acedb"
const purple = "#757ce8"
// Create a theme instance.
const theme = createTheme({
  palette: {
    common: {
      black: mainBlack,
      mainTifanny,
      purple: purple,
    },
    primary: {
      main: "#ff544a",
        light: mainTifanny,
        dark: purple,
    },
    secondary: {
      main: mainTifanny,
    },
    info: {
      main: purple,
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