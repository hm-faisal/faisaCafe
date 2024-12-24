import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer";
import MyOrders from "./MyOrders";
import useDevice from "../../hooks/useDevice";

const MyOrdersLayout = () => {
  const { darkTheme } = useDevice();
  return (
    <div data-theme={darkTheme ? "dark" : "light"}>
      <Header />
      <div>
        <MyOrders />
      </div>
      <Footer />
    </div>
  );
};

export default MyOrdersLayout;
