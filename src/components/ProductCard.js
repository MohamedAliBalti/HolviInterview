import { useState } from "react";
import "./DataTable.css";
import Button from "@mui/material/Button";
import { DeleteProduct } from "../services/actions";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";

import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import EditPopUp from "./EditPopUp";
function ProductCard({ product }) {
  const dispatch = useDispatch();

  const [editorOpen, setEditorOpen] = useState(false);
  const handleDeleteProduct = (id) => {
    dispatch(DeleteProduct(id));
  };

  return (
    <>
      <div className="product-container ">
        <ul className="product-list ">
          <div className="product">
            <li className="name-cell">
              <Typography>{product.name}</Typography>
            </li>
            <li className="card-cell">
              <Typography>{product.quantity}</Typography>{" "}
            </li>
            <Button
              className="delete-btn"
              onClick={() => {
                setEditorOpen(!editorOpen);
              }}
            >
              <EditIcon />
            </Button>
            <Button
              className="delete-btn"
              onClick={() => {
                handleDeleteProduct(product.id);
              }}
            >
              <DeleteIcon />
            </Button>

            <EditPopUp
              editorOpen={editorOpen}
              setEditorOpen={setEditorOpen}
              product={product}
            />
          </div>
        </ul>
      </div>
    </>
  );
}

export default ProductCard;
