import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import MainHeader from "./components/MainHeader";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
