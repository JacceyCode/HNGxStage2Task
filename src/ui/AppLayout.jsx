import { Outlet } from "react-router-dom";
import MobileNav from "./MobileNav";
import ScrollToTop from "./ScrollToTop";

function AppLayout() {
  return (
    <main className="bg-indigo-950">
      <section className="relative mx-auto max-w-[120rem] bg-white font-sans">
        <MobileNav />
        <ScrollToTop />
        <Outlet />
      </section>
    </main>
  );
}

export default AppLayout;
