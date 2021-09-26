import React from "react";
import "./userAvatar.styles.scss";

const UserAvatar: React.FC<any> = (props) => {
  return (
    <div className="useravatar" onMouseOver={props.onShowUser}>
      {props.showUser ? (
        <div className="useravatar__dropdown">
          <div className="useravatar__profile">
            <div className="useravatar__profile--content">
              <div className="useravatar__profile--img" />
              <div className="useravatar__profile--name">Duy Linh</div>
            </div>
            <div className="useravatar__profile--content">
              <div className="useravatar__profile--img" />
              <div className="useravatar__profile--name">Chiến</div>
            </div>
            <div className="useravatar__profile--content">
              <div className="useravatar__profile--img" />
              <div className="useravatar__profile--name">Hương</div>
            </div>
            <div className="useravatar__profile--content">
              <div className="useravatar__profile--img" />
              <div className="useravatar__profile--name">Diệu</div>
            </div>
          </div>
          <p className="useravatar__setting">Quản lý hồ sơ</p>
          <div className="useravatar__divide"></div>
          <p className="useravatar__setting">Tài khoản</p>
          <p className="useravatar__setting">Trung tâm trợ giúp </p>
          <p className="useravatar__setting">Đăng xuất khỏi Netflix</p>
        </div>
      ) : null}
    </div>
  );
};

export default UserAvatar;
