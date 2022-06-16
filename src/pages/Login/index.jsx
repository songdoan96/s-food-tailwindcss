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
  return <h1>Dk</h1>;
}

export default Login;
