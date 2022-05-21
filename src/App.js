import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./App.css";
import CustomeModal from "./components/CustomeModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toaster from "./components/Toasters";

const App = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const checkDateHandler = (e) => {
    e.preventDefault();
    if (selectedTime === "" || startTime === "" || endTime === "") {
      toast.error("Please fill all the fields", Toaster);
    } else {
      if (startTime === endTime) {
        if (selectedTime <= endTime && selectedTime >= startTime) {
          toast.success(
            "Selected Time is included within the start and end Time",
            Toaster
          );
        } else {
          toast.error(
            "Selected Time is not included within the start and end Time"
          );
        }
      } else {
        if (startTime > endTime) {
          toast.warning("Start time cannot be less than end time", Toaster);
        } else {
          if (selectedTime < endTime && selectedTime >= startTime) {
            toast.success(
              "Selected Time is included within the start and end Time",
              Toaster
            );
          } else {
            toast.error(
              "Selected Time is not included within the start and end Time",
              Toaster
            );
          }
        }
      }
    }
    resetFieldHandler();
  };

  const resetFieldHandler = () => {
    setSelectedTime("");
    setStartTime("");
    setEndTime("");
  };
  return (
    <>
      <ToastContainer />
      <CustomeModal
        BoxHeader="Check Time Range"
        style={{ marginTop: "2.5rem" }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <label>Select Time : </label>
              <input
                type="number"
                min="0"
                max="23"
                step="1"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              ></input>
            </Grid>
            <Grid item xs={4}>
              <label>Start Time :</label>
              <input
                type="number"
                min="0"
                max="23"
                step="1"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              ></input>
            </Grid>
            <Grid item xs={4}>
              <label>End Time :</label>
              <input
                type="number"
                min="0"
                max="23"
                step="1"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              ></input>
            </Grid>
            <Grid item xs={9}></Grid>
            <Grid item xs={3}>
              <button onClick={checkDateHandler}>Check</button>
            </Grid>
          </Grid>
        </Box>
      </CustomeModal>
    </>
  );
};

export default App;
