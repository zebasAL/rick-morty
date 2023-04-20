import React, { useEffect } from "react";
import { useCountdown } from "@/hooks/useCountdown";
import DateTimeDisplay from "./DateTimeDisplay";

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <DateTimeDisplay value={days} type={"Days"} isCloseToDate={days < 2} />
      <p>:</p>
      <DateTimeDisplay value={hours} type={"Hours"} isCloseToDate={false} />
      <p>:</p>
      <DateTimeDisplay value={minutes} type={"Mins"} isCloseToDate={false} />
      <p>:</p>
      <DateTimeDisplay value={seconds} type={"Seconds"} isCloseToDate={false} />
    </div>
  );
};

const CountdownTimer = (props: any) => {
  const { targetDate, setTargetDate, character, onCountdownFinished } = props;
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  React.useEffect(() => {
    setTargetDate(targetDate);
  }, [setTargetDate, targetDate]);

  if (days + hours + minutes + seconds <= 0) {
    return (
      <>
        <div className="counter-wrapper">
          <div className="reached-days">{character} has died!</div>
          <button style={{ margin: "0 .5rem" }} onClick={onCountdownFinished}>
            click to reset
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="counter-wrapper">
          <ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        </div>
      </>
    );
  }
};

export default CountdownTimer;
