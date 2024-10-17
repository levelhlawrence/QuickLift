import { createBrowserRouter } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

export default App;
