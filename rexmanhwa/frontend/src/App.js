import "./app.css";

import { RouterProvider } from "react-router-dom";
import router from "./routes/route";
import { StoreProvider } from "./context/Store";

function App() {
  return (
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  );
}

export default App;
