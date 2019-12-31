import React from "react";

export const ProductCategoryMenu = ({categories, activeItem}) => {
  return (

    <div className="row justify-content-center">
        <div className="col-md-10 mb-5 text-center">
          <ul className="product-category">
            {
              categories.map((category) => (
                  <li><a href="#" className={(activeItem === category) ? "active" : ""}>{category}</a></li>
                )
              )
            }
          </ul>
        </div>
      </div>
)};
