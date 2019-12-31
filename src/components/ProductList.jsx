import React from "react";
import {ProductItem} from "./ProductItem";

export const ProductList = ({products}) => {
  return (
    <div class="row">
      {
        products.map((item) => (
          <div className="col-md-6 col-lg-3">
            <ProductItem config={item} key={item.id} />
          </div>
        )
      )}
    </div>
)};
