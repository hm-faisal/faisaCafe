import NavItem from "./NavItem";
import { NavLink } from "react-router";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
import { FaUser } from "react-icons/fa6";
const navLinkClassName = "btn font-medium";

const siteName = "FaisaCafe";

const Header = () => {
  const { user, loading, setLoading, signOutUser } = useAuth();

  const userSignOutHandler = () => {
    signOutUser().then(() => {
      swal("Logout ", "successfully log out", "success");
      setLoading(false);
    });
  };

  return (
    <>
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow space-y-2"
              >
                <NavItem navLinkClassName={navLinkClassName} />
              </ul>
            </div>
            <a className="btn btn-ghost text-xl uppercase">{siteName}</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-2">
              <NavItem navLinkClassName={navLinkClassName} />
            </ul>
          </div>
          <div className="navbar-end space-x-2">
            {loading ? (
              <>
                <div className="flex items-center gap-4">
                  <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                  <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-4 w-28"></div>
                  </div>
                </div>
              </>
            ) : user ? (
              <>
                <div className="h-12 w-12 flex justify-center items-center rounded-full border">
                  {user && user.photoURL ? (
                    <div className="dropdown">
                      <div tabIndex={0} role="button" className="">
                        <img
                          src={user.photoURL}
                          alt=""
                          className="h-12 w-12 rounded-full"
                        />
                      </div>
                      <ul
                        tabIndex={0}
                        className="menu menu-sm right-0 dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow space-y-2"
                      >
                        <NavLink
                          to={"/my-added-foods"}
                          className={navLinkClassName}
                        >
                          My Foods
                        </NavLink>
                        <NavLink to={"/add-food"} className={navLinkClassName}>
                          add-food
                        </NavLink>
                        <NavLink to={"/my-orders"} className={navLinkClassName}>
                          My Orders
                        </NavLink>
                      </ul>
                    </div>
                  ) : (
                    <FaUser />
                  )}
                </div>
                <button
                  className="btn btn-neutral"
                  onClick={userSignOutHandler}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to={"/auth/signIn"} className={"btn btn-neutral"}>
                  Sign In
                </NavLink>
                <NavLink to={"/auth/signUp"} className={"btn btn-neutral"}>
                  Sign Up
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
