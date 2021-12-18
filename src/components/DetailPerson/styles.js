import { createUseStyles } from "react-jss"
import { theme } from "../../assets/styles/theme"

const useStyles = (theme) => ({
  boxDetail: {
    width: "calc(100% - 22rem)",
    marginLeft: "auto",
    paddingTop: "3.8rem",
    boxSizing: "border-box",
    "@media (max-width: 780px)": {
      width: "calc(100% - 18rem)",
    },
    "@media (max-width: 600px)": {
      width: "100%",
      paddingTop: "1rem",
    }
  },
  contBoxDetail: {
    padding: "2.5rem 0",
    height: "100%",
    width: "80%",
    minHeight: "calc(100vh - 3.8rem)",
    margin: "auto",
    boxSizing: "border-box",
    "& ul": {
      margin: 0,
      padding: 0,
    }
  },
  wraper: {
  },
  box: {
    marginBottom: "2rem",
  },
  title: {
    fontSize: "1.1rem",
    fontFamily: theme.fontFamily,
    fontWeight: 600,
    color: theme.darkText,
    margin: 0,
    marginBottom: ".8rem",
  },
  listItem: {
    display: "flex",
    flexWrap: "flex-wrap",
    justifyContent: "space-between",
    alignItems: "center",
    listStyle: "none",
    padding: ".9rem 0",
    boxSizing: "border-box",
    borderBottom: `.1rem solid ${theme.lightGray}`,
    "& h3": {
      margin: 0,
      fontSize: "1.1rem",
      fontFamily: theme.fontFamily,
    },
  },
  textTitle: {
    color: theme.lightText,
    fontWeight: 600,
  },
  textDetail: {
    color: theme.darkText,
    textTransform: "capitalize",
    fontWeight: 600,
  }
});
export default createUseStyles(useStyles)