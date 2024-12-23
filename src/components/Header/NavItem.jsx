import { NavLink } from "react-router";
import { PropTypes } from "prop-types";

const NavItem = ({ navLinkClassName }) => {
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
NavItem.propTypes = {
  navLinkClassName: PropTypes.string,
};

export default NavItem;
