import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import PurchaseForm from "./PurchaseForm";
import useDevice from "../../hooks/useDevice";
import { Helmet } from "react-helmet";

const PurchaseLayout = () => {
  const { id } = useParams();
  const { darkTheme, siteName } = useDevice();
  return (
    <div data-theme={darkTheme ? "dark" : "light"}>
      <Helmet>
        <title> Order || {siteName}</title>
      </Helmet>
      <Header />
      <div>
        <PurchaseForm id={id} />
      </div>
      <Footer />
    </div>
  );
};

export default PurchaseLayout;
