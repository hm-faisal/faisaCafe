import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import PurchaseForm from "./PurchaseForm";

const PurchaseLayout = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Header />
      <div>
        <PurchaseForm id={id} />
      </div>
      <Footer />
    </>
  );
};

export default PurchaseLayout;
