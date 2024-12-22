import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MyFoodsCard = ({ food }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={food.food_img_url} alt="Shoes" className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{food.food_name}</h2>
        <p>Price : {food.food_price} $</p>
        <p>Origin : {food.food_origin}</p>
        <p>Category : {food.food_category}</p>
        <p>Quantity : {food.food_quantity}</p>
        <div className="card-actions justify-end">
          <Link to={`/foods-update/${food._id}`} className="btn btn-primary">
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

MyFoodsCard.propTypes = { food: PropTypes.object };

export default MyFoodsCard;
