import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import ProductDesScreen from "./screens/ProductDesScreen";
import Footer from "./components/Footer";
import Cartscreen from "./screens/Cartscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
import Aboutusscreen from "./screens/Aboutusscreen";
import Ordersscreen from "./screens/Ordersscreen";
import Orderinfo from "./screens/Orderinfo";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Route path="/" component={Homescreen} exact />
        <Route path="/product/:id" component={ProductDesScreen} />
        <Route path="/cart" component={Cartscreen} />
        <Route path="/register" component={Registerscreen} />
        <Route path="/login" component={Loginscreen} />
        <Route path="/about-us" component={Aboutusscreen} />
        <Route path="/orders" component={Ordersscreen} />
        <Route path="/orderinfo/:orderid" component={Orderinfo} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
