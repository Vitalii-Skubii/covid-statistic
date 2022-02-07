import React, { useEffect, useState } from "react";
import axios from "axios";
import AppBar from "./AppBar";
import CountryItem from "./CountryItem";
import { createUseStyles } from "react-jss";

axios.defaults.baseURL = "https://api.covid19api.com";

const useStyles = createUseStyles({
  tableHeader: {
    display: "flex",
    alignItems: "center",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
    background: "#2196F3",
    height: "80px",
    marginBottom: "20px",
  },

  statsHeader: {
    paddingLeft: "22px",
    height: "100%",
    color: "white",
    display: "flex",
    alignItems: "center",
    width: "64%",
    "&:not(:last-child)": { borderRight: "1px solid white" },
    "&:first-child": {
      width: "4%",
    },
    "&:last-child": {
      width: "32%",
    },
    // cursor: "pointer",
  },
});

const CountryList = () => {
  const [countriesStats, setCountriesStats] = useState([]);
  const [filter, setFilter] = useState("");

  const filterCountries = countriesStats.filter(
    ({ Country }) =>
      Country.toLowerCase().includes(filter) || Country.includes(filter)
  );

  // filterCountries.sort((a, b) => b.Country - a.Country);

  // filterCountries.sort((a, b) => a.TotalConfirmed - b.TotalConfirmed);

  const handleChangeFilter = (e) => setFilter(e.target.value);

  const handleGetCountries = () =>
    axios.get("/summary").then(({ data }) => setCountriesStats(data.Countries));

  useEffect(() => {
    handleGetCountries();
  }, []);

  const classes = useStyles();

  return (
    <div>
      <AppBar onFilterCountries={handleChangeFilter} filter={filter} />
      <div className={classes.tableHeader}>
        <p className={classes.statsHeader}>№</p>
        <p className={classes.statsHeader}>Country</p>
        <p className={classes.statsHeader}>Total Confirmed</p>
      </div>

      {countriesStats &&
        filterCountries.map((item, index) => (
          <CountryItem key={item.ID} item={item} number={index + 1} />
        ))}
    </div>
  );
};
export default CountryList;
