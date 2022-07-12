import { NavLink as Link } from "react-router-dom";

function NavLink({ name, to }) {
  return (
    <Link
      to={to}
      className="hover:bg-gray-200 text-black cursor-pointer py-[9px] px-[14px] text-[20px]"
    >
      {name}
    </Link>
  );
}

export default NavLink;
