import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1>Không tìm thấy trang</h1>
      <Link to="/" className="btn btn-info">
        Tới trang chủ
      </Link>
    </div>
  );
};

export default Page404;
