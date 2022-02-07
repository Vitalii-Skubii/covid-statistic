import React from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "60px",
    paddingRight: "60px",
    paddingTop: "40px",
  },
});
const Container = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};
export default Container;
