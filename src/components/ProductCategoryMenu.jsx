import React from "react";

export const ProductCategoryMenu = ({
  categories,
  activeItem,
  onItemSelect
}) => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-10 mb-5 text-center">
        <ul className="product-category">
          {categories.map(category => (
            <li key={category}>
              <a
                href="#"
                className={activeItem === category ? "active" : ""}
                onClick={event => {
                  onItemSelect(event);
                  event.preventDefault();
                }}
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
