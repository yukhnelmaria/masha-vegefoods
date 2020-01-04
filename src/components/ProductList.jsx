import React from "react";
import {ProductItem} from "./ProductItem";

export const ProductList = ({products}) => {
  return (
    <div className="row">
      {
        products.map((item) => (
          <div className="col-md-6 col-lg-3" key={item.id}>
            <ProductItem config={item} />
          </div>
        )
      )}
    </div>
)};
