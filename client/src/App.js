import {Route, Routes } from "react-router-dom";
import Landing  from './components/Landing';
import NavBar from "./components/Navbar";
import CustomerList from "./components/CustomerList";
import NewTranfer from "./pages/NewTransfer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ViewAllTrfr from "./pages/ViewAllTrfr";
function App() {
  return (
    <div>
       <ToastContainer />
        <NavBar/>
        <Routes> 
            <Route path="/" element={<Landing />}  /> 
            <Route path="/newtransfer/:payerid" element={<NewTranfer/>} />
            <Route path="/customers" element={<CustomerList/>} />
            <Route path="/transactions" element={<ViewAllTrfr />} /> 
       </Routes> 
     
    </div>
  );
}

export default App;
