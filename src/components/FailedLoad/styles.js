import { createUseStyles } from "react-jss"
import { theme } from "../../assets/styles/theme"

const useStyles = (theme) => ({
  contLoader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.emphasisText,
    padding: "1.2rem 1rem",
    boxSizing: "border-box",
    "& h3": {
      margin: "0",
      fontFamily: theme.fontFamily,
      marginLeft: ".5rem",
      fontSize: "1.15rem",
      fontWeight: 600,
    },
  }
});
export default createUseStyles(useStyles)