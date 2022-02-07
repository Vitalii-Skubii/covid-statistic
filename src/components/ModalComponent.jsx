import React from "react";
import { createUseStyles } from "react-jss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import heart from "../assets/heart.svg";
import scull from "../assets/scull.svg";
import stats from "../assets/stats.svg";

const useStyles = createUseStyles({
  header: {
    color: "black",
    marginBottom: "38px",
  },
  icon: {
    width: "30px",
    marginRight: "29px",
    textAlign: "center",
  },
  headIcon: {
    display: "flex",
  },

  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "&:not(:last-child)": {
      marginBottom: "48px",
    },
  },
  info: {
    fontWeight: 400,
  },
});

const style = {
  modal: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    // height: 400,
    bgcolor: "background.paper",
    color: "#666666",
    borderRadius: "20px",
    outline: "none",
    padding: "20px",
  },
  styleButton: {
    backgroundColor: "#2196F3",
    color: "white",
    width: 171,
    height: 49,
    borderRadius: 20,
    fontSize: 24,
    "&:hover": {
      backgroundColor: "#2196E3",
    },
  },
};

const ModalComponent = ({
  open,
  onClose,
  Country,
  TotalConfirmed,
  TotalDeaths,
  TotalRecovered,
}) => {
  const classes = useStyles();
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.modal}>
          <h1 className={classes.header}>{Country}</h1>
          <div className={classes.wrapper}>
            <div className={classes.headIcon}>
              <span className={classes.icon}>
                <img src={heart} />
              </span>
              <p className={classes.info}>Total Confirmed </p>
            </div>

            <p className={classes.info}>{TotalConfirmed}</p>
          </div>
          <div className={classes.wrapper}>
            <div className={classes.headIcon}>
              <span className={classes.icon}>
                <img src={scull} />
              </span>
              <p className={classes.info}>Total Deaths </p>
            </div>

            <p className={classes.info}>{TotalDeaths}</p>
          </div>
          <div className={classes.wrapper}>
            <div className={classes.headIcon}>
              <span className={classes.icon}>
                <img src={stats} />
              </span>
              <p className={classes.info}>Total Recovered </p>
            </div>

            <p className={classes.info}>{TotalRecovered}</p>
          </div>

          <Button sx={style.styleButton} onClick={onClose}>
            Ok
          </Button>
        </Box>
      </Modal>
    </>
  );
};
export default ModalComponent;
