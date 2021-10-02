import React, { useEffect, useState } from "react";
import "./sliderDot.styless.scss";

const UISlider: React.FC<any> = (props) => {
  const [dotQuantity, setDotQuantity] = useState<any>(0);
  const layout = [<div key={100}></div>];
  useEffect(() => {
    const resizerHandler = () => {
      if (window.innerWidth < 501) {
        setDotQuantity(20);
      } else if (window.innerWidth > 500 && window.innerWidth < 782) {
        setDotQuantity(13);
      } else if (window.innerWidth > 782 && window.innerWidth < 1100) {
        setDotQuantity(10);
      } else if (window.innerWidth > 1100 && window.innerWidth < 1400) {
        setDotQuantity(8);
      } else if (window.innerWidth > 1400) {
        setDotQuantity(6);
      }
      console.log(window.innerWidth);
    };
    resizerHandler();
    window.addEventListener("resize", resizerHandler);
  }, []);

  for (let i = 0; i < dotQuantity; i++) {
    layout.push(
      <div key={i} className={`dot ${props.slide === i && "sanglen"}`}></div>
    );
  }
  return <div className="dots">{layout}</div>;
};

export default UISlider;
