import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer";
import MyOrders from "./MyOrders";

const MyOrdersLayout = () => {
  return (
    <>
      <Header />
      <div>
        <MyOrders />
      </div>
      <Footer />
    </>
  );
};

export default MyOrdersLayout;
