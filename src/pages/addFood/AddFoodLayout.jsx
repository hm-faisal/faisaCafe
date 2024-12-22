import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import AddFoodForm from "./AddFoodForm";

const AddFoodLayout = () => {
  return (
    <>
      <Header />
      <div>
        <AddFoodForm />
      </div>
      <Footer />
    </>
  );
};

export default AddFoodLayout;
