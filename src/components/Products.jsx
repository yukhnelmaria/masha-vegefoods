import React from "react";
import {ProductCategoryMenu} from "./ProductCategoryMenu";
import {Paginator} from "./Paginator";
import {ProductList} from "./ProductList";
import _ from "underscore";

const findCategories = (array) => {
  const productCategories = _.unique(array.map((item) => item.category.name));
  return ["All", ...productCategories];
};

const filterCategoryArray = (categoryName, array) => {
  if (categoryName !== "All") {
    return array.filter(item => item.category.name === categoryName);
  }

  return array;
}

export class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: this.props.products || [],
      categories: findCategories(this.props.products),
      currentCategoryName: "All",
      currentPageIndex: 1 // for paginator
    };

    this.state.filteredProducts = filterCategoryArray(this.state.currentCategoryName, this.props.products);

    this.showFilteredProducts = this.showFilteredProducts.bind(this);
  }

  showFilteredProducts(event) {
    this.setState({
      currentCategoryName: event.target.text,
      products: filterCategoryArray(event.target.text, this.state.products)
    });
  }
  
  render() {
    return (
      <section className="ftco-section">
        <div className="container">
          <ProductCategoryMenu 
            activeItem={this.state.currentCategoryName}
            categories={this.state.categories}
            onItemSelect={this.showFilteredProducts}
          />
          <ProductList
            products={filterCategoryArray(this.state.currentCategoryName, this.props.products)}
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