import { useContext } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router";
import DeviceContext from "../../context/userDeviceInfo/DeviceContext";

const AuthLayout = () => {
  const { minHeight } = useContext(DeviceContext);
  return (
    <>
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
    </>
  );
};

export default AuthLayout;
