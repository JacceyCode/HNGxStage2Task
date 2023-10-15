import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <main className="bg-indigo-950">
      <section className="mx-auto max-w-[120rem] border-4 border-red-500 bg-white font-sans">
        <Outlet />
      </section>
    </main>
  );
}

export default AppLayout;
