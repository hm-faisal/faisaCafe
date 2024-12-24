import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import AllFoods from "./AllFoods";
import AllFoodPageBanner from "./AllFoodPageBanner";
import useDevice from "../../hooks/useDevice";

const AllFoodsLayout = () => {
  const { darkTheme } = useDevice();
  return (
    <div data-theme={darkTheme ? "dark" : "light"}>
      <Header />
      <AllFoodPageBanner />
      <AllFoods />
      <Footer />
    </div>
  );
};

export default AllFoodsLayout;
