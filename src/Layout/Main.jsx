import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shard/Footer/Footer";
import NavBar from "../Shard/NavBar/NavBar";

const Main = () => {
    const location = useLocation()
    const hideOption =
      location.pathname.includes("logIn") || 
      
      location.pathname.includes("signUp");
    return (
      <div>
        {hideOption || <NavBar></NavBar>}
        <Outlet></Outlet>
        {hideOption || <Footer></Footer>}
      </div>
    );
};

export default Main;