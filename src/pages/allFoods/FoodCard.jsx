import PropTypes from "prop-types";

const FoodCard = ({ food }) => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
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
          <button className="btn btn-primary">See Details</button>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = { food: PropTypes.object };

export default FoodCard;
