import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {
  const error = [];
  const isLoading = false;

  const user = [];
  useEffect(() => {
    if (user) {
      // dispatch(setToast({ message: "Bạn đã đăng nhập." }));
      // navigate("/");
    }
  }, []);

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const { password, email } = loginForm;

  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // loginUser(loginForm, dispatch, navigate);
  };
  return (
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input
          class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="password"
          type="password"
          placeholder="******************"
        />
        <p class="text-red text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Sign In
        </button>
        <a
          class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
    </div>
  );
}

export default Login;
