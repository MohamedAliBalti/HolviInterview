import "./App.css";
import { useEffect } from "react";
import DataTable from "./components/DataTable";
import Header from "./components/Header";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts,getMerchantName } from "./services/actions";

function App() {
  const {products,merchantName} = useSelector((state) => state.reducer);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(getMerchantName());
  }, [dispatch]);

  return (
    <div className="App">
      <Header merchantName={merchantName}/>

      <div className="DataTable">
        <DataTable products={products} />
      </div>
    </div>
  );
}

export default App;
