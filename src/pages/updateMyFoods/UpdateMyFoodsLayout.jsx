import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import UpdateFoodForm from "./UpdateFoodForm";
import useDevice from "../../hooks/useDevice";
import { Helmet } from "react-helmet";

const UpdateMyFoodsLayout = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const axiosBase = useAxios();
  const { darkTheme, siteName } = useDevice();

  useEffect(() => {
    axiosBase.get(`/foods/${id}`).then((res) => setFood(res.data));
  }, []);
  return (
    <div data-theme={darkTheme ? "dark" : "light"}>
      <Helmet>
        <title> Update Food Info || {siteName}</title>
      </Helmet>
      <Header />
      <div>
        <UpdateFoodForm food={food} />
      </div>
      <Footer />
    </div>
  );
};

export default UpdateMyFoodsLayout;
