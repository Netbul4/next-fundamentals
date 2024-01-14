import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log("Moving Scroll.");
    const scrollDetect = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", scrollDetect);

    return () => window.removeEventListener("scroll", scrollDetect);
  }, [scrollY]);

  useEffect(() => {
    console.log("Mount Phase.");
  }, []);

  useEffect(() => {
    console.log("Update Phase.");
  });

  useEffect(() => {
    return () => {
      console.log("Unmount Phase.");
    };
  });

  return (
    <>
      <h2>Hooks - useEffect</h2>
      <p>Navigator Scroll in Y axis: {scrollY}px</p>
    </>
  );
}
