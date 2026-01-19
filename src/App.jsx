import { RouterProvider } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import ReduxProvider from "./utilities/provider/ReduxProvider";

function App() {
  return (
    <ReduxProvider>
      <RouterProvider router={AppRoutes} />
    </ReduxProvider>
  );
}

export default App;
