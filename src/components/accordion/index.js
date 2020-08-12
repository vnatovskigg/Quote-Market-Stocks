import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import Chevron from "../chevron";

const Accordion = (props) => {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toogleActive = () => {
    setActive(!active);
  };

  const titleStyle = {
    fontWeight: 600,
    fontSize: "14px",
  };

  return (
    <div className="accordion-section">
      <button className="accordion-title" onClick={toogleActive}>
        <p style={titleStyle}>{props.title}</p>
        <span className={active ? "accordion-icon rotate" : "accordion-icon"}>
          <Chevron width={10} fill={"#e2dcdc"} />
        </span>
      </button>

      <div ref={contentRef} className="accordion-content">
        <span
          className="accordion-text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></span>
      </div>
    </div>
  );
};

export default Accordion;
