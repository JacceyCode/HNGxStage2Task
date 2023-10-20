import Logo from "../ui/Logo";
import NavBar from "../ui/NavBar";

function SideNav() {
  return (
    <aside className="fixed hidden h-screen flex-col items-center justify-stretch gap-8 rounded-r-[3rem] border-2 py-8 lg:flex">
      <Logo />

      <NavBar />
    </aside>
  );
}

export default SideNav;
