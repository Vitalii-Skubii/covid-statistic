import React, { useState } from "react";
import { createUseStyles } from "react-jss";

import ModalComponent from "./ModalComponent";

const useStyles = createUseStyles({
  itemWrapper: {
    display: "flex",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
    height: "80px",
    marginBottom: "20px",
  },
  stats: {
    paddingLeft: "22px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    width: "64%",
    "&:first-child": {
      width: "4%",
    },
    "&:last-child": {
      width: "32%",
    },
    "&:not(:last-child)": { borderRight: "1px solid #B2B2B2" },
    cursor: "pointer",
  },
});

const CountryItem = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const { Country, TotalConfirmed, TotalDeaths, TotalRecovered } = props.item;

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const classes = useStyles();
  return (
    <>
      <div className={classes.itemWrapper} onClick={handleOpenModal}>
        <div className={classes.stats}>{props.number}</div>
        <div className={classes.stats}>{Country}</div>
        <div className={classes.stats}>{TotalConfirmed}</div>
      </div>
      <ModalComponent
        open={openModal}
        onClose={handleCloseModal}
        Country={Country}
        TotalConfirmed={TotalConfirmed}
        TotalDeaths={TotalDeaths}
        TotalRecovered={TotalRecovered}
      />
    </>
  );
};
export default CountryItem;
