import {
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import {FaRev, FaUtensils} from "react-icons/fa6";
import {NavLink, Outlet} from "react-router-dom";
import useCarts from "../hooks/useCarts";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCarts();

  // TODO get admin data from to database
const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-slate-700">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li className=" text-2xl font-bold">
                <NavLink to="/dashboard/adminhome">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li className="text-2xl font-bold">
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li className="text-2xl font-bold">
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li className="text-2xl font-bold">
                <NavLink to="/dashboard/manageBooking">
                  <FaBook></FaBook>
                  Manage Booking
                </NavLink>
              </li>
              <li className="text-2xl font-bold">
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}

          {/* shared menu link */}
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
