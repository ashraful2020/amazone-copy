import "./App.css";  
import Home from "./Pages/Home/Home"; 
import Header from "./Pages/Shared/Header";

function App() {
  return (
    <div className="app">
      <Header /> 
      <Home/> 
    </div>
  );
}

export default App;
