import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import AllFoods from "./AllFoods";
import AllFoodPageBanner from "./AllFoodPageBanner";
const allFoodsLayout = () => {
  return (
    <>
      <Header />
      <AllFoodPageBanner />
      <AllFoods />
      <Footer />
    </>
  );
};

export default allFoodsLayout;
