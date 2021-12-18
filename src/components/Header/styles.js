import {createUseStyles} from "react-jss"
import {theme} from "../../assets/styles/theme"

const useStyles = (theme) => ({
  header: {
    background: theme.primaryColor,
    height: "3.8rem",
    display: "flex",
    alignItems: "center",
    position: "fixed",
    width: "100%",
    zIndex: 2,
    top: 0,
    "& a": {
      color: theme.whiteColor,
      fontFamily: "Helvetica",
      fontWeight: 400,
      fontSize: 18,
      margin: 0,
      textDecoration: "none",
      "&:hover": {
        opacity: ".8",
      }
    }
  },
  contHeader: {
    width: "95%",
    margin: "0 auto",
  }
});
export default createUseStyles(useStyles)