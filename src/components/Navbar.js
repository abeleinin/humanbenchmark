import NavLink from "./NavLink";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 h-[48px] bg-white w-full shadow-md">
      {/* Add links here */}
      <div className="flex justify-center">
        <NavLink name="HOME" to="/" />
        <NavLink name="SEQUENCE" to="/sequence" />
      </div>
    </nav>
  );
}

export default Navbar;
