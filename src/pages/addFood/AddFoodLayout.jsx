import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import AddFoodForm from "./AddFoodForm";
import useDevice from "../../hooks/useDevice";
import { Helmet } from "react-helmet";

const AddFoodLayout = () => {
  const { darkTheme, siteName } = useDevice();
  return (
    <div data-theme={darkTheme ? "dark" : "light"}>
      <Helmet>
        <title>Add Food || {siteName}</title>
      </Helmet>
      <Header />
      <div>
        <AddFoodForm />
      </div>
      <Footer />
    </div>
  );
};

export default AddFoodLayout;
