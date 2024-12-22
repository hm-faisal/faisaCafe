import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import UpdateFoodForm from "./UpdateFoodForm";

const UpdateMyFoodsLayout = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const axiosBase = useAxios();

  useEffect(() => {
    axiosBase.get(`/foods/${id}`).then((res) => setFood(res.data));
  }, []);
  return (
    <>
      <Header />
      <div>
        <UpdateFoodForm food={food} />
      </div>
      <Footer />
    </>
  );
};

export default UpdateMyFoodsLayout;
