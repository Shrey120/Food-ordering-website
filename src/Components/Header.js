import React from "react";
import "./style.css";

export default function Header({ filteritem, list, id }) {
  return (
    <>
      <nav className="navbar">
        <div className="btn-grp">
          {list.map((ele, id) => {
            return (
              <button
                key={id}
                className="btn"
                onClick={() => filteritem(ele)}>
                {ele}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
