import { createBrowserRouter } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Test from "./pages/Test";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

export default App;
