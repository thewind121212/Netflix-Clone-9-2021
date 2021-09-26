import React from "react";
import "./notificationItem.styles.scss";

const Notification: React.FC<any> = (props) => {
  return (
    <li className="notification-item">
      <div className="notification-item__image"> </div>
      <div className="notification-item__content">
        <div className="notification-item__content--title">{props.title} </div>
        <div className="notification-item__content--infomation">
          {props.infomation}
        </div>
        <div className="notification-item__content--day">
          cách đây {props.timestamp}
        </div>
      </div>
    </li>
  );
};

export default Notification;
