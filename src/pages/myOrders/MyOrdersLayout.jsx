import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer";
import MyOrders from "./MyOrders";
import useDevice from "../../hooks/useDevice";
import { Helmet } from "react-helmet";

const MyOrdersLayout = () => {
  const { darkTheme, siteName } = useDevice();
  return (
    <div data-theme={darkTheme ? "dark" : "light"}>
      <Helmet>
        <title> My Orders || {siteName}</title>
      </Helmet>
      <Header />
      <div>
        <MyOrders />
      </div>
      <Footer />
    </div>
  );
};

export default MyOrdersLayout;
