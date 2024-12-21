import { NavLink } from "react-router";
const navLinkClassName = "btn font-medium";

const NavItem = () => {
  return (
    <>
      <NavLink to={"/"} className={navLinkClassName}>
        Home
      </NavLink>
      <NavLink to={"/all-foods"} className={navLinkClassName}>
        All Foods
      </NavLink>
      <NavLink to={"/gallery"} className={navLinkClassName}>
        Gallery
      </NavLink>
      {/* <NavLink className={'font-medium'}></NavLink> */}
    </>
  );
};

export default NavItem;
