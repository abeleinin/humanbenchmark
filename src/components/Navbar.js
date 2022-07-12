import NavLink from "./NavLink";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 h-[48px] bg-white w-full shadow-md">
      {/* Add links here */}
      <div className="flex justify-center">
        <NavLink name="HOME" to="/" id="0" />
        <NavLink name="SEQUENCE" to="/sequence" id="1" />
      </div>
    </nav>
  );
}

export default Navbar;
