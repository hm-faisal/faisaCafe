import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";

const FoodDetails = ({ id }) => {
  const axiosBase = useAxios();
  const [foodInfo, setFoodInfo] = useState({});
  useEffect(() => {
    axiosBase
      .get(`/foods/${id}`)
      .then((res) => setFoodInfo(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div className="hero pt-16 w-full">
        <div className="hero-content flex-col lg:flex-row gap-4">
          <img
            src={foodInfo.food_img_url}
            className="max-w-lg rounded-lg shadow-2xl flex-1 w-full"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold">{foodInfo.food_name}</h1>
            <p className="py-1">Category : {foodInfo.food_category}</p>
            <p className="py-1">Stock : {foodInfo.food_quantity}</p>
            <p className="py-1">Price : {foodInfo.food_price} $</p>
            <p className="py-1">purchased : {foodInfo.already_sell || 0} </p>
            <p className="py-1">Food Origin : {foodInfo.food_origin}</p>
            <p className="py-1">
              Description:
              {foodInfo.food_description
                ? foodInfo.food_description
                : "No description Provided"}
            </p>
            {foodInfo.food_quantity === 0 && (
              <p className="text-error my-2">Sorry ! Item is not available</p>
            )}
            <Link
              to={foodInfo.food_quantity > 0 && `/purchase/${foodInfo._id}`}
              className="btn  text-white bg-orange-500 hover:bg-orange-600"
              disabled={foodInfo.food_quantity === 0 ? true : false}
            >
              Purchase
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

FoodDetails.propTypes = {
  id: PropTypes.string,
};

export default FoodDetails;
