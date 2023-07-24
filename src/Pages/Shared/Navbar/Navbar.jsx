import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };

  return (
    <>
      <div className="navbar px-5 py-5 font-bold text-white bg-[#00425A]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-primary"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link to="/user">Profile</Link>
                  </li>
                  <li>
                    <Link className="text-xl" to="/" onClick={handleLogOut}>
                      LogOut
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/register"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="flex items-center">
            <div>
              <Link to="/">
                <img src="" alt="" />
              </Link>
            </div>
            <Link to="/">
              <a className="btn btn-ghost normal-case text-3xl">Academiz</a>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/colleges"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Colleges
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admission"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Admission
              </NavLink>
            </li>
            {user ? (
              <>
              <li>
              <NavLink
                to="/myCollege"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                My College
              </NavLink>
            </li>
                <li>
                  <Link to="/" onClick={handleLogOut}>
                    LogOut
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div className="flex items-center gap-5">
              <label
                style={{}}
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar showName"
              >
                {user?.photoURL ? (
                  <div className="w-10 rounded-full img__wrap">
                    <img className="img__img" src={user?.photoURL} />
                    <p className="img__description">{user?.displayName}</p>
                  </div>
                ) : (
                  <div className="w-10 rounded-full img__wrap">
                    <img
                      className="img__img "
                      src={
                        "https://raw.githubusercontent.com/Akram409/Developer-Portfolio/main/images/profile.png"
                      }
                    />
                    <p className="img__description">{user?.displayName}</p>
                  </div>
                )}
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-error rounded-box w-52"
              >
                <li>
                  <Link to="/user" className="justify-between">
                    Profile
                  </Link>
                </li>
                {user ? (
                  <li>
                    <NavLink to="/" onClick={handleLogOut}>
                      LogOut
                    </NavLink>
                  </li>
                ) : (
                  <>
                    <li>
                      <NavLink
                        to="/login"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/register"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Register
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
