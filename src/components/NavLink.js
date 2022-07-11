import { NavLink as Link } from "react-router-dom";

function NavLink({ name, to }) {
  return (
    <Link
      to={to}
      className="bg-white rounded-lg m-2 text-[#808080] flex items-center h-full cursor-pointer p-10"
    >
      {name}
    </Link>
  );
}

export default NavLink;
