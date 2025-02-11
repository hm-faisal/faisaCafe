import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import FoodCard from "./FoodCard";

const AllFoods = () => {
  const axiosBase = useAxios();
  const [foods, setFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("default");

  const searchHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const searchValue = form.get("searchQuery");
    setSearchQuery(searchValue);
  };

  useEffect(() => {
    axiosBase
      .get(`/all-foods?search=${searchQuery}&sort=${sort}`)
      .then((res) => {
        setFoods(res.data);
      })
      .catch((e) => console.log(e));
  }, [sort, searchQuery]);

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
          <select
            name="sort"
            className="p-2 rounded mr-2"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-low-to-high">Price Low to High</option>
            <option value="price-high-to-low">Price High to Low</option>
          </select>
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
