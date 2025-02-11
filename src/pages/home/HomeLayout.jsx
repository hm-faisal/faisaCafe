import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import Carousel from "./Carousel";
import Banner from "./Banner";
import CustomerReview from "./CustomerReview";
import TopFoods from "./TopFoods";
import useDevice from "../../hooks/useDevice";
import { Helmet } from "react-helmet";
import Contact from "./contact";

const HomeLayout = () => {
  const { darkTheme, minHeight, siteName } = useDevice();
  return (
    <div data-theme={darkTheme ? "dark" : "light"}>
      <Helmet>
        <title>Home || {siteName}</title>
      </Helmet>
      <Header />
      <div
        className={`flex justify-center items-center flex-col`}
        style={{ minHeight: minHeight ? minHeight : "49vh" }}
      >
        <Banner />
        <TopFoods />
        <Carousel />
        <CustomerReview />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
