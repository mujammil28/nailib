import React, { useEffect, useRef, useState } from "react";

export default function MarqueeReactComponent({
  items = [],
  speed = 15,
  gradient = true,
  pauseOnHover = true,
  className = "",
}) {
  const trackRef = useRef(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.scrollWidth / 2); // half because we duplicated items
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [items]);

  useEffect(() => {
    const styleId = "marquee-component-styles";
    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = `
      .marquee-root { overflow: hidden; position: relative; width: 100%; }
      .marquee-track {
  display: flex;
  gap: 2rem;
  white-space: nowrap;
  align-items: center;
  flex-shrink: 0;
  width: max-content; /* prevents extra stretching */
}
.marquee-item {
  flex-shrink: 0;
}
@media (max-width: 640px) {
  .marquee-track { gap: 1rem; }
  .marquee-img { height: 40px; }
}

      @keyframes marqueeMove {
        0% { transform: translateX(0); }
        100% { transform: translateX(var(--marquee-width)); }
      }
      .marquee-anim {
        display: flex;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        will-change: transform;
      }
      .marquee-pause:hover .marquee-anim { animation-play-state: paused; }

      .marquee-mask {
        -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
                mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
      }
      .marquee-img {
        height: 50px;
        width: auto;
        object-fit: contain;
        border-radius: 8px;
        background: white;
        padding: 4px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        flex-shrink: 0;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const rootClasses = `marquee-root ${className}`;
  const hoverClass = pauseOnHover ? "marquee-pause" : "";
  const maskClass = gradient ? "marquee-mask" : "";
  const duration = Math.max(4, Number(speed) || 15);

  const doubledItems = [...items, ...items];

  return (
    <div className={rootClasses}>
      <div
        className={`${maskClass} ${hoverClass} w-full overflow-hidden bg-gradient-to-r from-white/3 via-white/6 to-white/3 py-2`}
        style={{ backdropFilter: "blur(6px)" }}
      >
        <div
          className="marquee-anim"
          style={{
            animationDuration: `${duration}s`,
            "--marquee-width": trackWidth ? `-${trackWidth}px` : "50%",
            animationName: "marqueeMove",
          }}
        >
          <div className="marquee-track" ref={trackRef}>
            {doubledItems.map((item, idx) => (
              <div key={idx} className="marquee-item">
                {typeof item === "string" && item.match(/\.(jpeg|jpg|gif|png|svg)(\?.*)?$/i) ? (
  <img src={item} alt={`marquee-${idx}`} className="marquee-img" />
) : typeof item === "string" && item.startsWith("http") ? (
  <img src={item} alt={`marquee-${idx}`} className="marquee-img" />
) : (
  <span className="font-semibold text-lg text-white">{item}</span>
)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
