import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import FoodDetails from "./FoodDetails";
import useDevice from "../../hooks/useDevice";
import { Helmet } from "react-helmet";

const FoodLayout = () => {
  const { id } = useParams();
  const { darkTheme, siteName } = useDevice();
  return (
    <div data-theme={darkTheme ? "dark" : "light"}>
      <Helmet>
        <title>Foods Details || {siteName}</title>
      </Helmet>
      <Header />
      <div>
        <FoodDetails id={id} />
      </div>
      <Footer />
    </div>
  );
};

export default FoodLayout;
