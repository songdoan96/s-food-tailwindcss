import React from "react";

function Register() {
  return (
    <div className="flex justify-center items-center mt-10">
      <form action="" className="bg-gray-100 py-10 px-5 shadow-lg">
        <h1 className="font-bold uppercase text-2xl text-center">Đăng ký</h1>
        <div className="form-control my-5">
          <label htmlFor="name">Họ tên</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="form-control my-5">
          <label htmlFor="name">Họ tên</label>
          <input type="text" name="name" id="name" />
        </div>
      </form>
    </div>
  );
}

export default Register;
