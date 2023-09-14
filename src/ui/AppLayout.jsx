import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.status === "loading";

  return (
    <main className="relative bg-white font-sans">
      {isLoading && <Loader />}

      <Outlet />
    </main>
  );
}

export default AppLayout;
