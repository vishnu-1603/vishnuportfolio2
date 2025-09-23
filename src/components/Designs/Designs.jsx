import React, { useRef } from "react";
import "./Designs.css";
import designData from "./DesignsData";

function Designs() {
  const containerRef = useRef(null);

  // Scroll Left (3 designs at once)
  const scrollLeft = () => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({ left: -width, behavior: "smooth" });
    }
  };

  // Scroll Right (3 designs at once)
  const scrollRight = () => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({ left: width, behavior: "smooth" });
    }
  };

  return (
    <section className="designs">
      <h2 className="designs-title">My Designs</h2>
      <p className="designs-subtitle">Here are some creative works I’ve done</p>

      {/* Buttons */}
      <div className="scroll-buttons">
        <button onClick={scrollLeft} className="scroll-btn">⬅ Prev</button>
        <button onClick={scrollRight} className="scroll-btn">Next ➡</button>
      </div>

      {/* Outer Scroll Container */}
      <div className="designs-outer" ref={containerRef}>
        {designData.map((design) => (
          <div key={design.id} className="design-card">
            <img src={design.img} alt={design.title} />
            <h3>{design.title}</h3>
            <p>{design.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Designs;
