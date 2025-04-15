import "./App.css";
import Home from "./pages/Home";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import './index.css'
function App() {
  
  return(
    <div className="my-font">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App;
