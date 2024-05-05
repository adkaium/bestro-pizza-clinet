import {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../provider/AuthProvider";
import {FaShoppingCart} from "react-icons/fa";
import useCarts from "../../hooks/useCarts";

const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);
  const [cart] = useCarts();
  const hadelLogOut = () => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };
  const navOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Main Menu</Link>
      </li>

      <li>
        <Link to="/order/salad">Order</Link>
      </li>
      {user ? (
        <p className="m-4 uppercase bg-slate-100 text-black">
          {user.displayName}
        </p>
      ) : (
        <>
          <p>Null</p>
        </>
      )}
      {user ? (
        <>
          <button onClick={hadelLogOut} className="btn btn-active btn-ghost">
            Log Out
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/logIn">Log In</Link>
          </li>
          <li>
            <Link to="/signUp">SingUp</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 max-w-screen-xl bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bestro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end">
          <Link to='/dashboard/cart'>
            <button className="btn">
              <FaShoppingCart className="text-2xl"></FaShoppingCart>
              <div className="badge badge-secondary">+{cart.length}</div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
