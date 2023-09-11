import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="relative border-4 border-red-700 bg-white font-sans lg:m-auto lg:h-[178rem] lg:w-[90rem] lg:p-0">
      {isLoading && <Loader />}

      <Outlet />
    </div>
  );
}

export default AppLayout;
