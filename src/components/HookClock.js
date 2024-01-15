import React, { useState, useEffect } from "react";

function Clock({ hour }) {
  return <h3>{hour}</h3>;
}

export default function HookClock() {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;

    if (visible) {
      timer = setInterval(() => {
        setHour(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      console.log("Unmount Phase");
      clearInterval(timer);
    };
  }, [visible]);

  return (
    <>
      <h2>Clock using Hooks.</h2>
      {visible && <Clock hour={hour} />}
      <button onClick={() => setVisible(true)}>Start</button>
      <button onClick={() => setVisible(false)}>Stop</button>
    </>
  );
}
