import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={food.food_img_url} alt="Shoes" className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title px-4">{food.food_name}</h2>
        <table className="table">
          <tbody>
            <tr>
              <th>Price</th>
              <th>:</th>
              <td>{food.food_price} $</td>
            </tr>
            <tr>
              <th>Origin</th>
              <th>:</th>
              <td>{food.food_origin}</td>
            </tr>
            <tr>
              <th>Category</th>
              <th>:</th>
              <td>{food.food_category}</td>
            </tr>
            <tr>
              <th>Quantity</th>
              <th>:</th>
              <td>{food.food_quantity}</td>
            </tr>
            <tr>
              <th>Purchased</th>
              <th>:</th>
              <td>{food.already_sell}</td>
            </tr>
            <tr>
              <th></th>
              <td></td>
              <td>
                <Link
                  to={`/foods/${food._id}`}
                  className="btn text-white bg-orange-500 hover:bg-orange-600"
                >
                  See Details
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

FoodCard.propTypes = { food: PropTypes.object };

export default FoodCard;
