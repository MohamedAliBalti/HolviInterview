import {  useState } from "react";
import "./DataTable.css";
import Button from "@mui/material/Button";
import { patchQuantity } from "../services/actions";
import { useDispatch } from "react-redux";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

function EditPopUp({ editorOpen, setEditorOpen, product }) {
  const dispatch = useDispatch();

  const [newQuantity, setNewQuantity] = useState(product.quantity);

  const handleChangeQuantity = (id, quantity) => {
    dispatch(patchQuantity(id, quantity));
    setEditorOpen(!editorOpen);
  };

  const handleClose = () => {
    setEditorOpen(false);
  };

  return (
    <div>
      <Dialog open={editorOpen} onClose={handleClose}>
        <DialogTitle>Edit quantity of {product.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter new quantity.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={newQuantity}
            onChange={(event) => {
              setNewQuantity(event.target.value);
            }}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleChangeQuantity(product.id, newQuantity);
            }}
          >
            Confirm value
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditPopUp;
