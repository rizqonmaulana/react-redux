import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import Product from "./Product";

const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("products: ", products);

  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="container">
        <div className="row g-4">
          {Object.keys(products).length === 0 ? (
            <div>Loading ... </div>
          ) : (
            <Product />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
