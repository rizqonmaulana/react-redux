import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Product = () => {
  const cardImageStyle = {
    maxWidth: "150px",
    maxHeight: "350px",
    margin: "auto",
  };

  const cardImageDiv = {
    height: "350px",
    display: "flex",
    justifyContent: "center",
  };

  const cardProductStyle = {
    height: "380px",
    color: "#000000",
  };

  const cardTitleStyle = {
    borderTop: "1px solid #eaeaea",
  };

  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="col-3" key={id}>
        <Link to={`/product/${id}`}>
          <Card style={cardProductStyle}>
            <div style={cardImageDiv}>
              <CardImg
                alt="Card image cap"
                src={image}
                top
                style={cardImageStyle}
              />
            </div>
            <CardBody style={{ height: "180px" }}>
              <div style={cardTitleStyle}>
                <CardTitle style={{ fontSize: "14px" }}>
                  {title.substring(0, 50) + "..."}
                </CardTitle>
              </div>
              <CardSubtitle
                className="mb-2 text-muted"
                style={{ fontSize: "12px" }}
              >
                {category}
              </CardSubtitle>
              <CardText>$ {price}</CardText>
            </CardBody>
          </Card>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default Product;
