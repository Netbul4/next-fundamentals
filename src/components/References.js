import React, { createRef, useRef } from "react";

export default function References() {
  let menuRef = useRef();
  let menuRefBtn = useRef();

  const handleToggleMenu = (e) => {
    if (menuRefBtn.current.textContent === "Menu") {
      menuRefBtn.current.textContent = "Close";
      menuRef.current.display = "block";
    } else {
      menuRefBtn.current.textContent = "Menu";
      menuRef.current.style.display = "none";
    }
  };

  return (
    <>
      <h2>References</h2>
      <button ref={menuRefBtn} onClick={handleToggleMenu}>
        Menu
      </button>
      <nav ref={menuRef} style={{ display: "none" }}>
        <a href="">Section 1</a>
        <br />
        <a href="">Section 2</a>
        <br />
        <a href="">Section 3</a>
        <br />
        <a href="">Section 4</a>
        <br />
        <a href="">Section 5</a>
      </nav>
    </>
  );
}
