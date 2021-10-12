import React from "react";
import "./infoPreview.styles.scss";
import InfoBlock from "./InfoBlock.component";

const InfoPreview: React.FC<any> = (props) => {
  return (
    <div className="info-preview">
      <div className="infoButton">
        <div className="infoButton__left">
          <i className="bx bx-play infoButton--play"></i>
          <i className="bx bx-plus infoButton--plus"></i>
          <i className="bx bx-like infoButton--like"></i>
          <i className="bx bx-dislike infoButton--dislike"></i>
        </div>
        <div className="infoButton-right">
          <i className="bx bx-chevron-down infoButton--down"></i>
        </div>
      </div>
      <InfoBlock id={props.id} />
    </div>
  );
};

export default InfoPreview;
