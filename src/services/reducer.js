

const INIT_STATE = {
  products: [],
  merchantName:"",
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCTS":
      return { ...state, products: action.payload };
      case "GET_MERCHANT_NAME":
        return { ...state, merchantName: action.payload };
    default:
      return state;
  }
};

export default reducer;
