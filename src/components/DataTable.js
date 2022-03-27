import {  useState } from "react";
import "./DataTable.css";

import Button from "@mui/material/Button";
import { addProduct } from "../services/actions";
import { useDispatch } from "react-redux";

import AddIcon from "@mui/icons-material/Add";
import { Input } from "@mui/material";
import ProductCard from "./ProductCard";

function DataTable({ products }) {
  const dispatch = useDispatch();

  const [fruitName, setFruitName] = useState("");

  const handleAddProduct = (name) => {
    dispatch(addProduct(name));
  };

  return (
    <>
      <Input
        onChange={(event) => {
          setFruitName(event.target.value);
        }}
        className="add-input"
        placeholder="Type new fruit's name"
        type="text"
      />

      <Button
        onClick={() => {
          handleAddProduct(fruitName);
        }}
      >
        <AddIcon />
      </Button>

      <div className="product-container">
        <ul className="product-list">
          <div className="product head">
            <li className="list-header">Product name</li>
            <li className="list-header">Quantity</li>
            <Button></Button>
            <Button></Button>
          </div>
        </ul>
      </div>

      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </>
  );
}

export default DataTable;
