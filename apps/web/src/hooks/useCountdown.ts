import { useState, useEffect } from "react";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function useCountdown(targetDate: Date): Countdown {
  const [countdown, setCountdown] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const startTime = new Date(targetDate).getTime();
      const endTime = new Date().getTime();
      const distanceToNow = startTime - endTime;

      const days = Math.floor(distanceToNow / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distanceToNow % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distanceToNow % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distanceToNow % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return countdown;
}
