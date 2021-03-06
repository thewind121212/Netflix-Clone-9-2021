import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/browse" className="nav__logo" />
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/browse" className="nav__link">
                Trang chủ
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/browse/tvshow" className="nav__link">
                Phim T.hình
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/browse/movie" className="nav__link">
                Phim
              </Link>
            </li>
            <li className="nav__item">
              <Link to="latest" className="nav__link">
                Mới & Phổ biến
              </Link>
            </li>
            <li className="nav__item">
              <Link to="mylist" className="nav__link">
                Danh sách của tôi
              </Link>
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
