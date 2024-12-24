import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router";
import useDevice from "../../hooks/useDevice";

const AuthLayout = () => {
  const { minHeight, darkTheme } = useDevice();
  return (
    <div data-theme={darkTheme ? "dark" : "light"}>
      <Header />
      <div className="bg-base-200">
        <div
          className="flex justify-center items-center flex-col max-w-screen-md mx-auto py-12"
          style={{ minHeight: minHeight ? minHeight : "49vh" }}
        >
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AuthLayout;
