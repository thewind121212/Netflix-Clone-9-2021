import React, { useEffect, useRef } from "react";
import "./search.styles.scss";

const Search: React.FC<any> = (props) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (props.showExpand) {
      searchInputRef.current!.focus();
    }
  }, [props.showExpand]);
  return (
    <div className="search">
      <i
        className={`bx bx-search search__icon ${
          props.showExpand.show && "none"
        }`}
        onMouseOver={props.onShowSearchExpand}
      />
      <div className={`search__wrap ${!props.showExpand.show && "none"}`}>
        <i className="bx bx-search" />
        <input
          type="text"
          placeholder="Phim, diễn viên, thể loại..."
          className="search__input"
          onBlur={props.onShowSearchExpand}
          ref={searchInputRef}
        />
      </div>
    </div>
  );
};

export default Search;
