import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import FoodDetails from "./FoodDetails";
import useDevice from "../../hooks/useDevice";

const FoodLayout = () => {
  const { id } = useParams();
  const { darkTheme } = useDevice();
  return (
    <div data-theme={darkTheme ? "dark" : "light"}>
      <Header />
      <div>
        <FoodDetails id={id} />
      </div>
      <Footer />
    </div>
  );
};

export default FoodLayout;
