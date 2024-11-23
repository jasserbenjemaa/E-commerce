import ProductList from "./components/ProductList";
import "./App.css";
import MenuSideBar from "./components/MenuSideBar";

const App = () => {
  return (
    <div className="container">
      <MenuSideBar />
      <ProductList />
    </div>
  );
};

export default App;
