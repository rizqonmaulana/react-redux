import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProducts,
  removeSelectedProducts,
} from "../redux/actions/productActions";

const ProductDetail = () => {
  const colStyle = {
    border: "1px solid #eaeaea",
    height: "90vh",
    textAlign: "center",
  };

  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const { image, title, price, description, category } = product;
  const dispatch = useDispatch();
  console.log(product);
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log(err);
      });

    console.log("response: ", response);

    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {Object.keys(product).length === 0 ? (
            <div>Loading ... </div>
          ) : (
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6" style={colStyle}>
                  <img
                    alt="Bootstrap Image Preview"
                    src={image}
                    className="mt-5"
                    style={{ maxWidth: "350px", maxHeight: "600px" }}
                  />
                </div>
                <div className="col-md-6 px-3" style={{ textAlign: "left" }}>
                  <h3 className="mt-5">{title}</h3>
                  <p
                    style={{
                      color: "#c27b4f",
                    }}
                  >
                    {category}
                  </p>
                  <p
                    style={{
                      backgroundColor: "#039dfc",
                      width: "100px",
                      borderRadius: "5px",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    $ {price}
                  </p>
                  <p>{description}</p>
                  <button type="button" className="btn btn-danger btn-md">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
