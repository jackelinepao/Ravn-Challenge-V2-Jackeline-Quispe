import { createUseStyles } from "react-jss"
import { theme } from "../../assets/styles/theme"

const useStyles = (theme) => ({

  sideBar: {
    marginTop: "3.8rem",
    boxSizing: "border-box",
    width: "22rem",
    height: "calc(100vh - 3.8rem)",
    position: "fixed",
    borderRight: `.1rem solid ${theme.lightGray}`,
    overflowY: "auto",
    "&::-webkit-scrollbar-track":
    {
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
      backgroundColor: "#F5F5F5",
    },
    "&::-webkit-scrollbar":
    {
      width: 8,
      backgroundColor: 2,
    },
    "&::-webkit-scrollbar-thumb":
    {
      backgroundColor: "#000000",
      border: "2px solid #555555",
    },
    "@media (max-width: 780px)": {
      width: "18rem",
    },
    "@media (max-width: 600px)": {
      width: "100%",
      position: "relative",
      height: "auto",
    }
  },
  itemList: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textDecoration: "none",
    fontFamily: theme.fontFamily,
    borderBottom: `.1rem solid ${theme.lightGray}`,
    padding: "1rem",
    boxSizing: "border-box",
    "& h2": {
      margin: 0,
      fontWeight: 600,
      fontSize: "1.1rem",
      color: theme.darkText,
      marginBottom: ".1rem",
    },
    "& p": {
      margin: 0,
      color: theme.lightText,
      fontWeight: 400,
      fontSize: ".9rem",
    },
    "&.active": {
      background: "rgba(130 130 130 / .08)"
    }
  },
  contIcon: {
    marginLeft: "1rem",
    "& svg": {
      color: theme.darkText,
      fontSize: "1rem",
    }
  },
});
export default createUseStyles(useStyles)