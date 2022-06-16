import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <nav className="shadow">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="flex items-center gap-4 text-lg">
          <Link className="cart" to="/cart">
            <FontAwesomeIcon icon={faShoppingBag} className="text-3xl" />
            <span className="relative -top-2 right-2 text-base font-bold bg-cyan-500 text-white  rounded-full w-6 h-6 inline-block text-center leading-tight">
              2
            </span>
          </Link>
          <Link to="/login">Đăng ký</Link>
          <Link to="/register">Đăng nhập</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
