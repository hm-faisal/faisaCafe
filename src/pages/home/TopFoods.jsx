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
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-4 md:m-10">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
      <Link to={"/all-foods"} className="btn btn-accent ">
        See All Items
      </Link>
    </>
  );
};

export default TopFoods;
