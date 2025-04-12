import "./App.css";
import Home from "./pages/Home";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  
  return(
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App;
