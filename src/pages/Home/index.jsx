import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faShop,
  faUserPlus,
  faFilter,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Home() {
  const showMenuMobile = () => {
    console.log("object");
  };
  return (
    <main className="flex gap-2 md:p-3">
      {/* <Link to="/" className="text-2xl">
          <strong>S.</strong>Food
        </Link>
        <div className="menu-btn cursor-pointer flex items-center">
          <FontAwesomeIcon icon={faBars} className="text-2xl" onClick={showMenuMobile} />
        </div> */}
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
            <FontAwesomeIcon className="w-6" icon={faUser} />
            <Link to="/register">Đăng ký</Link>
          </li>
          <li className="flex flex-col md:flex-row gap-1 md:gap-4 items-center my-4">
            <FontAwesomeIcon className="w-6" icon={faUserPlus} />
            <Link to="/register">Đăng nhập</Link>
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
      <div className="rounded-tl-2xl rounded-bl-2xl md:rounded-2xl bg-white flex-1 p-2">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
            <img
              class="object-cover w-full rounded-md h-72 xl:h-80"
              src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
              alt="T-Shirt"
            />
            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
              Printed T-shirt
            </h4>
            <p class="text-blue-500">$12.55</p>

            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-gray-700">
              <FontAwesomeIcon icon={faCartPlus} />
              <span class="mx-1">Thêm vào giỏ hàng</span>
            </button>
          </div>
          <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
            <img
              class="object-cover w-full rounded-md h-72 xl:h-80"
              src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
              alt="T-Shirt"
            />
            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
              Printed T-shirt
            </h4>
            <p class="text-blue-500">$12.55</p>

            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-gray-700">
              <FontAwesomeIcon icon={faCartPlus} />
              <span class="mx-1">Thêm vào giỏ hàng</span>
            </button>
          </div>
          <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
            <img
              class="object-cover w-full rounded-md h-72 xl:h-80"
              src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
              alt="T-Shirt"
            />
            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
              Printed T-shirt
            </h4>
            <p class="text-blue-500">$12.55</p>

            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-gray-700">
              <FontAwesomeIcon icon={faCartPlus} />
              <span class="mx-1">Thêm vào giỏ hàng</span>
            </button>
          </div>
          <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
            <img
              class="object-cover w-full rounded-md h-72 xl:h-80"
              src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
              alt="T-Shirt"
            />
            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
              Printed T-shirt
            </h4>
            <p class="text-blue-500">$12.55</p>

            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-gray-700">
              <FontAwesomeIcon icon={faCartPlus} />
              <span class="mx-1">Thêm vào giỏ hàng</span>
            </button>
          </div>
          <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
            <img
              class="object-cover w-full rounded-md h-72 xl:h-80"
              src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
              alt="T-Shirt"
            />
            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
              Printed T-shirt
            </h4>
            <p class="text-blue-500">$12.55</p>

            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-gray-700">
              <FontAwesomeIcon icon={faCartPlus} />
              <span class="mx-1">Thêm vào giỏ hàng</span>
            </button>
          </div>
          <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
            <img
              class="object-cover w-full rounded-md h-72 xl:h-80"
              src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
              alt="T-Shirt"
            />
            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
              Printed T-shirt
            </h4>
            <p class="text-blue-500">$12.55</p>

            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-gray-700">
              <FontAwesomeIcon icon={faCartPlus} />
              <span class="mx-1">Thêm vào giỏ hàng</span>
            </button>
          </div>
          <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
            <img
              class="object-cover w-full rounded-md h-72 xl:h-80"
              src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
              alt="T-Shirt"
            />
            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
              Printed T-shirt
            </h4>
            <p class="text-blue-500">$12.55</p>

            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-gray-700">
              <FontAwesomeIcon icon={faCartPlus} />
              <span class="mx-1">Thêm vào giỏ hàng</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
