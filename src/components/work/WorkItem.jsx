import React from "react";

const WorkItem = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt={item.image} className="work__img" />

      <h3 className="work__title">{item.title}</h3>
      <a href={item.url} className="work__button" target="_blank"  rel="noreferrer">
        Click Me For Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItem;
