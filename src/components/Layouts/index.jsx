import Sidebar from "../SideBar";
function Layout({ children }) {
  return (
    <div class="bg-gray-100">
      <main className="flex gap-2 md:p-3">
        <Sidebar />
        <div className="rounded-tl-2xl rounded-bl-2xl md:rounded-2xl bg-white flex-1 p-2">
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;
