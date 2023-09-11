import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="relative bg-white font-sans">
      {isLoading && <Loader />}

      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default AppLayout;
