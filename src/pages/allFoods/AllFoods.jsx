import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import FoodCard from "./FoodCard";

const AllFoods = () => {
  const axiosbase = useAxios();
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axiosbase
      .get("/all-foods")
      .then((res) => setFoods(res.data))
      .catch((e) => console.log(e));
  }, []);
  console.log(foods);
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-4 my-12">
        <h3 className="text-3xl font-bold">
          Total {foods.length} food found for you
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {foods.map((food) => (
            <FoodCard key={food._id} food={food} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllFoods;
