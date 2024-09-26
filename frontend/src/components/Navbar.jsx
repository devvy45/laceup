import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="ml-[7rem] flex items-center">
      <img src={logo} className="object-contain w-[200px]" />
      <ul className="ml-[5rem] text-2xl font-medium flex gap-x-14 p-14 pl-[8rem] z-50 relative">
        <li>
          <a href="/">MEN</a>
        </li>
        <li>
          <a href="/">WOMEN</a>
        </li>
        <li>
          <a href="/">SALE</a>
        </li>
        <li className={window.location.pathname === "/" ? "text-white" : ""}>
          <a href="/snkrs">SNKRS</a>
        </li>
      </ul>
    </div>
  );
}
