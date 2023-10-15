import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <main className="bg-indigo-950">
      <section className="mx-auto max-w-[120rem] bg-white font-sans">
        <Outlet />
      </section>
    </main>
  );
}

export default AppLayout;
