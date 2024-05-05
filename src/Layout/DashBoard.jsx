import { FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaRev } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../hooks/useCarts";


const DashBoard = () => {
  const [cart] = useCarts()
    return (
      <div className="flex">
        <div className="w-64 min-h-screen bg-slate-700">
          <ul className="menu">
            <li className=" text-2xl font-bold">
              <NavLink to="/dashboard/userHome">
                <FaHome></FaHome>
                User Home
              </NavLink>
            </li>
            <li className="text-2xl font-bold">
              <NavLink to="/dashboard/reserVation">
                <FaCalendar></FaCalendar>
                Reservation
              </NavLink>
            </li>
            <li className="text-2xl font-bold">
              <NavLink to="/dashboard/cart">
                <FaShoppingCart></FaShoppingCart>
                My Cart ({cart.length})
              </NavLink>
            </li>
            <li className="text-2xl font-bold">
              <NavLink to="/dashboard/review">
                <FaRev></FaRev>
                Add Review
              </NavLink>
            </li>
            <li className="text-2xl font-bold">
              <NavLink to="/dashboard/myBooking">
                <FaList></FaList>
                My Booking
              </NavLink>
            </li>
            <div className="divider divider-accent"></div>
            <li className=" text-2xl font-bold">
              <NavLink to="/">
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
            <li className=" text-2xl font-bold">
              <NavLink to="/">
                <FaSearch></FaSearch>
                Search
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default DashBoard;