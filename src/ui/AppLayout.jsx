import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <main className="relative bg-white font-sans">
      <Outlet />
    </main>
  );
}

export default AppLayout;
