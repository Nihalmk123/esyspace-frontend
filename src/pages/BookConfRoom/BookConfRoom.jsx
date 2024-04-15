import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";

const BookConfRoom = () => {
  return (
    <>
      <div className="container p-5">
        <div className="row justify-content-center">
          <div className="card p-3 shadow-sm">
            <h1 className="p-3 text-center">Book Conference Room</h1>
            <form className="p-3">
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                id="phone"
                label="Phone"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Select Date" fullWidth margin="normal" />
              </LocalizationProvider>
              <Button
                variant="contained"
                style={{ marginTop: "10px" }}
                color="primary"
                fullWidth
              >
                Book Conference Room
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookConfRoom;
