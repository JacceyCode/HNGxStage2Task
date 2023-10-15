import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movies/:id",
        element: <Movie />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
