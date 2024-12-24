import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import PurchaseForm from "./PurchaseForm";
import useDevice from "../../hooks/useDevice";

const PurchaseLayout = () => {
  const { id } = useParams();
  const { darkTheme } = useDevice();
  return (
    <div data-theme={darkTheme ? "dark" : "light"}>
      <Header />
      <div>
        <PurchaseForm id={id} />
      </div>
      <Footer />
    </div>
  );
};

export default PurchaseLayout;
