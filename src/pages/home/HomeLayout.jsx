import { useContext } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import DeviceContext from "../../context/userDeviceInfo/DeviceContext";
// import Carousel from "./Carousel";

const HomeLayout = () => {
  const { minHeight } = useContext(DeviceContext);
  return (
    <>
      <Header />
      <div
        className={`flex justify-center items-center flex-col`}
        style={{ minHeight: minHeight ? minHeight : "49vh" }}
      >
        {/* <Carousel /> */}
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
