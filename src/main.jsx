import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AllRoutes from "./routes/AllRoutes";
import AuthProvider from "./context/auth/AuthProvider";
import DeviceProvider from "./context/userDeviceInfo/DeviceProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DeviceProvider>
      <AuthProvider>
        <BrowserRouter>
          <AllRoutes />
        </BrowserRouter>
      </AuthProvider>
    </DeviceProvider>
  </StrictMode>
);
