import React from 'react';
import './App.css';
import {Products} from "./components/Products";
import {TopInfoPanel} from "./components/TopInfoPanel";
import {MainMenu} from "./components/MainMenu";
import {PageHeader} from "./components/PageHeader";
import {SubscribeBlock} from "./components/SubscribeBlock";
import {Footer} from "./components/Footer";


const products = [
  {
    id: 1,
    name: "Bell Pepper", 
    category: {
      id: 2,
      name:"Vegetables"
    },
    imageUrl: "product-1.jpg",
    priceOld: "120",
    priceSale: "80", 
    price: ""
  },
  {
    id: 2,
    name: "Strawberry",
    category: {
      id: 3,
      name:"Fruits"
    }, 
    imageUrl: "product-2.jpg",
    priceOld: "",
    priceSale: "", 
    price: "120"
  },
  {
    id: 3,
    name: "Green Beans",
    category: {
      id: 2,
      name:"Vegetables"
    }, 
    imageUrl: "product-3.jpg",
    priceOld: "",
    priceSale: "", 
    price: "120"
  },
  {
    id: 4,
    name: "Purple Cabbage",
    category: {
      id: 2,
      name:"Vegetables"
    },
    imageUrl: "product-4.jpg",
    priceOld: "",
    priceSale: "", 
    price: "120"
  },
  {
    id: 5,
    name: "Tomatoe",
    category: {
      id: 2,
      name:"Vegetables"
    },
    imageUrl: "product-5.jpg",
    priceOld: "120",
    priceSale: "80", 
    price: ""
  },
  {
    id: 6,
    name: "Brocolli",
    category: {
      id: 2,
      name:"Vegetables"
    },
    imageUrl: "product-6.jpg",
    priceOld: "",
    priceSale: "", 
    price: "120"
  },
  {
    id: 7,
    name: "Carrots",
    category: {
      id: 2,
      name:"Vegetables"
    },
    imageUrl: "product-7.jpg",
    priceOld: "",
    priceSale: "", 
    price: "120"
  },
  {
    id: 8,
    name: "Fruit Juice",
    category: {
      id: 4,
      name: "Fruits Juice"
    },
    imageUrl: "product-8.jpg",
    priceOld: "",
    priceSale: "", 
    price: "120"
  },
  {
    id: 9,
    name: "Onion",
    category: {
      id: 2,
      name:"Vegetables"
    },
    imageUrl: "product-9.jpg",
    priceOld: "120",
    priceSale: "80", 
    price: ""
  },
  {
    id: 10,
    name: "Apple",
    category: {
      id: 3,
      name:"Fruits"
    },
    imageUrl: "product-10.jpg",
    priceOld: "",
    priceSale: "", 
    price: "120"
  },
  {
    id: 11,
    name: "Garlic",
    category: {
      id: 2,
      name:"Vegetables"
    },
    imageUrl: "product-11.jpg",
    priceOld: "",
    priceSale: "", 
    price: "120"
  },
  {
    id: 12,
    name: "Chilli",
    category: {
      id: 2,
      name:"Vegetables"
    },
    imageUrl: "product-12.jpg",
    priceOld: "",
    priceSale: "", 
    price: "120"
  }
];

function App() {
  return (
    <>
      <TopInfoPanel />
      <MainMenu />
      <PageHeader />
      <Products products={products} />
      <SubscribeBlock />
      <Footer />
    </>
  );
}

export default App;
