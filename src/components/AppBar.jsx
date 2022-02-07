import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import { createUseStyles } from "react-jss";
const useStyle = createUseStyles({
  logoWrapper: {
    display: "flex",
    alignItems: "center",
  },

  headerWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  inputWrapper: {
    position: "relative",
    width: "600px",
    maxHeight: "80px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
    overflow: "hidden",
    textAlign: "start",
  },
  input: {
    width: "500px",

    border: "none",
    outline: "none",
    fontSize: "48px",
    color: "black",
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingLeft: "32px",

    "&::placeholder": {
      color: "#B2B2B2",
    },
  },
  img: {
    position: "absolute",
    top: "28px",
    right: "24px",
  },
  header: {
    fontSize: "72px",
  },
});

const AppBar = (props) => {
  const classes = useStyle();
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.logoWrapper}>
        <img src={Logo} alt="Covid-19" />
        <h1>STATISTIC</h1>
      </div>

      <div className={classes.inputWrapper}>
        <input
          className={classes.input}
          type="text"
          value={props.filter}
          onChange={props.onFilterCountries}
          placeholder="Search..."
        />
        <img className={classes.img} src={search} />
      </div>
    </div>
  );
};
export default AppBar;
