import {
  faArrowRightFromBracket,
  faFilter,
  faShop,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sidebar w-28 md:w-48 bg-white  h-screen px-1 md:px-3 rounded-tr-2xl rounded-br-2xl md:rounded-2xl">
      <Link to="/" className="text-2xl block p-4">
        <strong>S.</strong>Food
      </Link>
      <hr />
      <ul className="user">
        <li className="flex flex-col md:flex-row gap-1 md:gap-4 items-center my-4">
          <FontAwesomeIcon className="w-6" icon={faShop} />
          <Link to="/register">Giỏ hàng (6)</Link>
        </li>
        <li className="flex flex-col md:flex-row gap-1 md:gap-4 items-center my-4">
          <FontAwesomeIcon className="w-6" icon={faUserPlus} />
          <Link to="/login">Đăng nhập</Link>
        </li>
        <li className="flex flex-col md:flex-row gap-1 md:gap-4 items-center my-4">
          <FontAwesomeIcon className="w-6" icon={faUser} />
          <Link to="/register">Đăng ký</Link>
        </li>
        <li className="flex items-center justify-between my-4">
          <span className="text-sm font-semibold uppercase">Đoàn Quang Song</span>
          <FontAwesomeIcon className="text-red-600 cursor-pointer" icon={faArrowRightFromBracket} />
        </li>
      </ul>
      <hr />
      <div className="filter py-2">
        <div className="flex items-center justify-between text-lg py-5">
          <FontAwesomeIcon icon={faFilter} className="text-primary" />
          <p className="text-xl font-semibold">Sắp xếp</p>
        </div>

        <div class="w-full pl-2 flex items-center py-4 transition-colors duration-200 justify-start text-primary  bg-gradient-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800 border-r-4 border-primary">
          <input type="radio" name="sort" id="sort1" className="hidden md:inline-block md:mr-2" />
          <label htmlFor="sort1" class="text-sm cursor-pointer font-semibold">
            Giá tăng dần
          </label>
        </div>
        <div class="w-full pl-2 flex items-center py-4 transition-colors duration-200 justify-start text-gray-500 dark:text-gray-200  hover:text-primary">
          <input type="radio" name="sort" id="sort2" className="hidden md:inline-block md:mr-2" />
          <label htmlFor="sort2" class="text-sm cursor-pointer font-semibold">
            Giá tăng dần
          </label>
        </div>
        <div class="w-full pl-2 flex items-center py-4 transition-colors duration-200 justify-start text-gray-500 dark:text-gray-200  hover:text-primary">
          <input type="radio" name="sort" id="sort3" className="hidden md:inline-block md:mr-2" />
          <label htmlFor="sort3" class="text-sm cursor-pointer font-semibold">
            Giá tăng dần
          </label>
        </div>
        <div class="w-full pl-2 flex items-center py-4 transition-colors duration-200 justify-start text-gray-500 dark:text-gray-200  hover:text-primary">
          <input type="radio" name="sort" id="sort4" className="hidden md:inline-block md:mr-2" />
          <label htmlFor="sort4" class="text-sm cursor-pointer font-semibold">
            Giá tăng dần
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
