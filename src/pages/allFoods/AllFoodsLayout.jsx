import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import AllFoods from "./AllFoods";
import AllFoodPageBanner from "./AllFoodPageBanner";
import useDevice from "../../hooks/useDevice";
import { Helmet } from "react-helmet";

const AllFoodsLayout = () => {
  const { darkTheme, siteName } = useDevice();
  return (
    <div data-theme={darkTheme ? "dark" : "light"}>
      <Helmet>
        <title>All Foods || {siteName}</title>
      </Helmet>
      <Header />
      <AllFoodPageBanner />
      <AllFoods />
      <Footer />
    </div>
  );
};

export default AllFoodsLayout;
