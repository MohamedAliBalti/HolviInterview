import api from "./posts";

export function fetchProducts() {
  return async (dispatch) => {
    await api
      .get("/inventory")
      .then((result) => {
        if (result.status === 200) {
          dispatch({
            type: "UPDATE_PRODUCTS",
            payload: result.data,
          });
        }
      })
      .catch((error) => {
        console.log(error.response.status);
      });
  };
}

export function DeleteProduct(id) {
  return async (dispatch) => {

    await api
      .delete("/inventory/" + id + "/")
      .then((result) => {

        dispatch(fetchProducts());
      })
      .catch((error) => {
        console.log(error.response.status);
      });
  };
}

export function addProduct(name) {
  return async (dispatch) => {
    const formData = new FormData();
    formData.append("name", name);
    console.log({"name":name})
    await api.post("/inventory/", formData)
      .then((result) => {

        dispatch(fetchProducts());
      })
      .catch((error) => {
        console.log(error.response.status);
      });
  };
}


export function patchQuantity(id,qunatity) {
  return async (dispatch) => {
    const formData = new FormData();
    formData.append("quantity", qunatity);
    console.log("quant"+qunatity)
    await api.patch("/inventory/" + id + "/", formData)
      .then((result) => {
        dispatch(fetchProducts());
      })
      .catch((error) => {
        console.log(error.response.status);
      });
  };
}


export function getMerchantName() {
  return async (dispatch) => {
    await api
      .get("merchant-name/")
      .then((result) => {
        if (result.status === 200) {
          dispatch({
            type: "GET_MERCHANT_NAME",
            payload: result.data,
          });
        }
      })
      .catch((error) => {
        console.log(error.response.status);
      });
  };
}





