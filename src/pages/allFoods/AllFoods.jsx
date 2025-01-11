import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import FoodCard from "./FoodCard";

const AllFoods = () => {
  const axiosbase = useAxios();
  const [foods, setFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const searchValue = form.get("searchQuery");
    setSearchQuery(searchValue);
  };

  useEffect(() => {
    axiosbase
      .get(`/all-foods?search=${searchQuery}`)
      .then((res) => {
        setFoods(res.data);
      })
      .catch((e) => console.log(e));
  }, [searchQuery]);

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-4 my-12">
        <div className="flex justify-evenly items-center flex-col md:flex-row w-full">
          <h3 className="text-3xl font-bold text-center">
            Total {foods.length} food found for you
          </h3>
          <form onSubmit={searchHandler}>
            <input
              type="text"
              name="searchQuery"
              className="p-2 rounded mr-2"
              placeholder="Search with valid word"
            />
            <input type="submit" value={"Search"} className="btn" />
          </form>
        </div>

        {foods.length === 0 && <div>No Item Found</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4 md:m-10">
          {foods.map((food) => (
            <FoodCard key={food._id} food={food} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllFoods;
