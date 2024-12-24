import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import AddFoodForm from "./AddFoodForm";
import useDevice from "../../hooks/useDevice";

const AddFoodLayout = () => {
  const { darkTheme } = useDevice();
  return (
    <div data-theme={darkTheme ? "dark" : "light"}>
      <Header />
      <div>
        <AddFoodForm />
      </div>
      <Footer />
    </div>
  );
};

export default AddFoodLayout;
