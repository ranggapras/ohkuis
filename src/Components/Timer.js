import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Timer() {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  if (seconds === 0 && minutes === 0) {
    navigate("/result");
  }

  return (
    <h4 className="fw-bold">
      {minutes} : {seconds}
    </h4>
  );
}
