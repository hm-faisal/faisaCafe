import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import MyFoodsCard from "./MyFoodsCard";

const MyFoodsLayout = () => {
  const axiosBase = useAxios();
  const { user } = useAuth();
  const [myFoods, setMyFoods] = useState([]);

  useEffect(() => {
    axiosBase
      .get(`/all-foods?email=${user.email}`)
      .then((res) => setMyFoods(res.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <Header />
      <h2 className="text-4xl sm:text-5xl my-8 font-bold tracking-wide text-center">
        All Food Added By {user.displayName}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-4 md:m-10">
        {myFoods.map((food) => (
          <MyFoodsCard key={food._id} food={food} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default MyFoodsLayout;
