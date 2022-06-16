import Header from "../Header";
function Layout({ children }) {
  return (
    <div class="bg-gray-100">
      {/* <Header /> */}
      {children}
    </div>
  );
}

export default Layout;
