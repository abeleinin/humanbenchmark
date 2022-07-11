import NavLink from "./NavLink";

function Navbar() {
  return (
    <nav className="h-[84px] flex justify-between p-2">
      <div className="flex items-center">
        <NavLink name="Home" to="/" />
        <NavLink name="Sequence" to="/sequence" />
      </div>
    </nav>
  );
}

export default Navbar;
