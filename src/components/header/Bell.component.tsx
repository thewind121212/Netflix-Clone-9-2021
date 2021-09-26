import React from "react";
import NotificationItem from "./NotificationItem.component";
import "./bell.styles.scss";

const Bell: React.FC<any> = (props) => {
  let notificationsList = null;
  if (props.showBell) {
    notificationsList = (
      <div className="notification__dropdown">
        <NotificationItem
          title={"Tiếp tục xem"}
          recentDay={4}
          infomation={"Bird Box"}
        />
        <NotificationItem
          title={"Netflix Sắp ra mắt"}
          recentDay={3}
          infomation={"Khám phá nội dung sắp ra mắt "}
        />
        <NotificationItem
          title={"Test"}
          timestamp={"6 ngày "}
          infomation={"Test"}
        />
        <NotificationItem
          title={"Test"}
          timestamp={"2 tháng  "}
          infomation={"Test"}
        />
      </div>
    );
  } else {
  }
  return (
    <div className="nofitication" onClick={props.onShowBell}>
      <i className="bx bxs-bell" />
      {notificationsList}
    </div>
  );
};

export default Bell;
