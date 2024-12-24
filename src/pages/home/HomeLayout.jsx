import { useContext } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import DeviceContext from "../../context/userDeviceInfo/DeviceContext";
import Carousel from "./Carousel";
import Banner from "./Banner";
import CustomerReview from "./CustomerReview";
import TopFoods from "./TopFoods";
import useDevice from "../../hooks/useDevice";

const HomeLayout = () => {
  const { minHeight } = useContext(DeviceContext);
  const { darkTheme } = useDevice();
  return (
    <div data-theme={darkTheme ? "dark" : "light"}>
      <Header />
      <div
        className={`flex justify-center items-center flex-col`}
        style={{ minHeight: minHeight ? minHeight : "49vh" }}
      >
        <Banner />
        <Carousel />
        <TopFoods />
        <CustomerReview />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
