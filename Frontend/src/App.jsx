import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import './index.css'
import Footer from "./components/Footer";
function App() {
  
  return(
    <div className="my-font">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App;
