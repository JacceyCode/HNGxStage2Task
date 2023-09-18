import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <main className="relative w-screen bg-white font-sans">
      <Outlet />
    </main>
  );
}

export default AppLayout;
