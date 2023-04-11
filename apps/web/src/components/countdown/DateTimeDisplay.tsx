import React from "react";

const DateTimeDisplay = ({ value, type, isCloseToDate }) => {
  return (
    <div className={isCloseToDate ? "countdown close" : "countdown"}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
