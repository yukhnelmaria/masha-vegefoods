import React from "react";
import {ProductCategoryMenu} from "./ProductCategoryMenu";
import {Paginator} from "./Paginator";
import {ProductList} from "./ProductList";
import _ from "underscore";

const categories = (array) => {
  const productCategories = _.unique(array.map((item) => item.category.name));
  return ["All", ...productCategories];
};


export class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: this.props.products || [],
      currentCategoryName: "All",
      currentPageIndex: 1
    };
  }
  
  
  render() {
    return (
      <section className="ftco-section">
        <div className="container">
          <ProductCategoryMenu 
            activeItem={this.state.currentCategoryName}
            categories={categories(this.state.products)}
          />
          <ProductList
            products={this.state.products}
          />
          <Paginator
            currentIndex={this.state.currentPageIndex}
            length={5}
            fullLength={10}
          />
        </div>
      </section>
    )
  }
}
