import React, { useEffect, useState } from "react";
import useCountdown from "@/hooks/useCountdown";
import DateTimeDisplay from "./DateTimeDisplay";

interface CountdownTimerProps {
  targetDate: Date;
  character: string;
  onCountdownFinished: () => void;
}

const ShowCounter = (props) => {
  const { days, hours, minutes, seconds } = props;
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

const CountdownTimer = (props: CountdownTimerProps) => {
  const { targetDate, character, onCountdownFinished } = props;
  const [dyingCharacter, setDyingCharacter] = useState("");

  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const isCountdownFinished = days + hours + minutes + seconds <= 0;

  useEffect(() => {
    setDyingCharacter(character);
  }, [character]);

  // if (typeof window === undefined)
  //   return (
  //     <div className="counter-wrapper">
  //       <div className="reached-days">loading...</div>
  //     </div>
  //   );

  return (
    <div className="counter-wrapper">
      {isCountdownFinished ? (
        <>
          <div className="reached-days">{dyingCharacter} has died!</div>
          <button style={{ margin: "0 .5rem" }} onClick={onCountdownFinished}>
            click to reset
          </button>
        </>
      ) : (
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      )}
    </div>
  );
};

export default CountdownTimer;
