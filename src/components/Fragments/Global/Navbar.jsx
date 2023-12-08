import { useDispatch } from "react-redux";
import Button from "../../Elements/Button/Index";
import { logout } from "../../../store/authSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-white shadow-lg navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/data">Data</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="text-xl font-bold btn btn-ghost">daisyUI</a>
      </div>
      <div className="mr-2 navbar-end">
        <Button onClick={handleLogout} classname="btn-sm">
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
