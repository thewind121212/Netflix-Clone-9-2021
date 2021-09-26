import React, { useState, useEffect } from "react";
import "./header.styles.scss";
import Search from "./Search.component";
import Bell from "./Bell.component";
import UserAvatar from "./UserAvatar.component";

const Header = () => {
  const [searchExpand, setSearchExpand] = useState<any>({
    show: false,
    showBell: false,
    showUser: false,
  });

  const [show, handleShow] = useState<any>(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.addEventListener("scroll", transitionNavBar);
  }, []);

  const showSearchExpand = () => {
    setSearchExpand((prevState: any) => {
      return {
        ...prevState,
        show: !prevState.show,
      };
    });
  };

  const showBell = () => {
    setSearchExpand((prevState: any) => {
      return {
        ...prevState,
        showBell: !prevState.showBell,
      };
    });
  };

  const showUser = () => {
    setSearchExpand((prevState: any) => {
      return {
        ...prevState,
        showUser: !prevState.showUser,
      };
    });
  };

  return (
    <header className={`header ${show && "nav__black"}`}>
      <nav className="nav">
        <div className="nav__menu">
          <a href="#" className="nav__logo" />
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link">
                Trang chủ
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Phim T.hình
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Phim
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Mới & Phổ biến
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Danh sách của tôi
              </a>
            </li>
          </ul>
        </div>

        <div className="nav__function">
          <Search
            onShowSearchExpand={showSearchExpand}
            showExpand={searchExpand}
          />
          <Bell onShowBell={showBell} showBell={searchExpand.showBell} />
          <UserAvatar showUser={searchExpand.showUser} onShowUser={showUser} />
          <div className="nav__function--dropdown">
            <i className="bx bxs-down-arrow" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
