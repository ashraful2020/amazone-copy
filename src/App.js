import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import CheckOut from "./Pages/Home/CheckOut/CheckOut";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <CheckOut />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
