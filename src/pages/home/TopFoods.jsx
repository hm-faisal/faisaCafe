import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import FoodCard from "./FoodCard";
import { Link } from "react-router-dom";

const TopFoods = () => {
  const [foods, setFoods] = useState([]);
  const axiosBase = useAxios();

  useEffect(() => {
    axiosBase
      .get(`/all-foods?topFoods=true`)
      .then((res) => setFoods(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <section className="text-center">
      <h2 className="text-xl md:text-4xl font-bold mt-8">
        See Our Top Selling Foods
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4 md:m-10">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
      <Link
        to={"/all-foods"}
        className="btn text-white bg-orange-500 hover:bg-orange-600 mb-8"
      >
        See All Items
      </Link>
    </section>
  );
};

export default TopFoods;
