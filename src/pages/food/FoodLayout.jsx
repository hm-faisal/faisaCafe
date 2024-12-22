import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import FoodDetails from "./FoodDetails";

const FoodLayout = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Header />
      <div>
        <FoodDetails id={id} />
      </div>
      <Footer />
    </>
  );
};

export default FoodLayout;
