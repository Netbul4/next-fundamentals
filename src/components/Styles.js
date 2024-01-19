import React from "react";

export default function Styles() {
  let myStyle = {
    borderRadius: ".5 rem",
    margin: "2rem auto",
    maxWidth: "50%",
  };

  return (
    <section className="styles">
      <h2>CSS Styles on React,</h2>
      <h3 className="bg-react">CSS Styles with external file.</h3>
      <h3
        className="bg-react"
        style={{ borderRadius: ".25rem", margin: "1rem" }}
      >
        In-line style (style attribute)
      </h3>
      <h3 className="bg-react" style={myStyle}>
        In-line style.
      </h3>
      <h3 className="bg-react">Adding normalize.</h3>
      <br />
      <code>@import-normalize;</code>
    </section>
  );
}
