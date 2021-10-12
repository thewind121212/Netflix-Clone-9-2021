import React from "react";
import { useSelector } from "react-redux";
import "./sliderDot.styless.scss";

const UISlider: React.FC<any> = (props) => {
  const dotQuantity = useSelector((state: any) => state.dot.dotQuantity);
  const layout = [<div key={100}></div>];

  for (let i = 0; i < dotQuantity; i++) {
    layout.push(
      <div
        key={i}
        className={`categoryList__info--dots--dot ${
          Math.ceil(props.slide) === i && "sanglen"
        }`}
      ></div>
    );
  }
  return <div className="categoryList__info--dots">{layout}</div>;
};

export default UISlider;
