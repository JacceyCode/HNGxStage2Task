import { Outlet } from "react-router-dom";
// import MobileNav from "./MobileNav";

function AppLayout() {
  return (
    <main className="bg-indigo-950">
      <section className="relative mx-auto max-w-[120rem] bg-white font-sans">
        {/* <MobileNav /> */}
        <Outlet />
      </section>
    </main>
  );
}

export default AppLayout;
