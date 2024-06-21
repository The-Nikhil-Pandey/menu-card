import React from "react";
import Menu from "./menuApi";
const MenuCard = ({ menuData, filterItem, updateMenuData }) => {
  // console.log(menuData)

  return (
    <>
      <section className="">
        <div>
          <nav className="navbar">
            <div className="btn-group">
              <button
                className="btn-group__item"
                onClick={() => filterItem("breakfast")}
              >
                Breakfast
              </button>
              <button
                className="btn-group__item"
                onClick={() => filterItem("lunch")}
              >
                Lunch
              </button>
              <button
                className="btn-group__item"
                onClick={() => filterItem("evening")}
              >
                Evening
              </button>
              <button
                className="btn-group__item"
                onClick={() => filterItem("dinner")}
              >
                Dinner
              </button>
              <button className="btn-group__item" onClick={() => updateMenuData(Menu)}>All</button>
            </div>
          </nav>
        </div>
        <div className="main-card--cointainer">
          {menuData.map((curElem) => {
            return (
              <>
                <div className="card-container" key={curElem.id}>
                  <div className="card">
                    <div className="card-body">
                      <span className="card-number card-circle subtle">
                        {curElem.id}
                      </span>
                      <span className="card-author subtle">{curElem.name}</span>
                      <h2 className="card-title">{curElem.name}</h2>
                      <span className="card-description subtle">
                        {curElem.description}
                      </span>
                      <div className="card-read">Read</div>
                      <img
                        src={curElem.image}
                        alt="images"
                        className="card-media"
                      />
                      <span className="card-tag subtle"> Order Now</span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MenuCard;
