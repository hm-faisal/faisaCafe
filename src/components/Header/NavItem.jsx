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
      <NavLink to={"/my-added-foods"} className={navLinkClassName}>
        My Foods
      </NavLink>
      <NavLink to={"/my-orders"} className={navLinkClassName}>
        My Orders
      </NavLink>
      {/* <NavLink className={'font-medium'}></NavLink> */}
    </>
  );
};

export default NavItem;
