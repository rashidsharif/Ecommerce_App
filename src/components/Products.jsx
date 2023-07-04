import React from "react";
import styled from "styled-components";
import { popularProducts } from "../pages/data";
import { Link } from "react-router-dom";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Link to='/product' key={item.id}>
          <Product item={item} />
        </Link>
      ))}
    </Container>
  );
};

export default Products;
