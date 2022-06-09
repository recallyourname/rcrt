import React, { FC } from "react";
import Calendar from "@ericz1803/react-google-calendar";

const SchedulePage = (props) => {
  return (
    <div>
      <Calendar apiKey={"AIzaSyDhcBIomRfMMyO8JW_lCOfKUicu0xhpfso"} calendars={{calendarId:"vedkalnikita@gmail.com"}} />
    </div>
  );
};

export default SchedulePage;
