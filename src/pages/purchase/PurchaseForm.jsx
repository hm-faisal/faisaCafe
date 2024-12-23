import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import InputBox from "../../components/InputBox";
import moment from "moment";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PurchaseForm = ({ id }) => {
  const { user } = useAuth();
  const axiosBase = useAxios();
  const axiosBaseSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [foodInfo, setFoodInfo] = useState({});
  useEffect(() => {
    axiosBase
      .get(`/foods/${id}`)
      .then((res) => setFoodInfo(res.data))
      .catch((e) => console.log(e));
  }, []);

  const buyFoodHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const fromInfo = Object.fromEntries(form.entries());
    const purchaseInfo = {
      ...fromInfo,
      OrderTime: moment().format("MMMM Do YYYY, h:mm:ss a"),
    };

    const purchaseQuantity = parseInt(purchaseInfo.food_quantity);
    const stockQuantity = parseInt(foodInfo.food_quantity);

    if (foodInfo.added_by_email !== fromInfo.ordered_by_email) {
      if (purchaseQuantity <= stockQuantity) {
        axiosBaseSecure
          .post(`/buy/${id}`, purchaseInfo)
          .then((res) => {
            if (res.data?.success) {
              swal("Food Ordered", `${res.data.message}`, "success");
              navigate("/all-foods");
            }
          })
          .catch((e) =>
            swal(
              "Unauthorize or Forbidden Access",
              `Please Login Again \n Message: ${e.response.data.message}`,
              "warning"
            )
          );
      } else {
        swal(
          "Order Cannot placed",
          "Sorry ! available quantity limited",
          "error"
        );
        return;
      }
    } else {
      swal("Order Cannot placed", "Sorry ! You cannot Buy Your food", "error");
    }
  };

  return (
    <>
      <div className="max-w-xl mx-auto">
        <form className="card-body" onSubmit={buyFoodHandler}>
          <InputBox
            label="Food Name"
            type="text"
            name="food_name"
            defaultValue={foodInfo.food_name}
          />
          <InputBox
            label="Food Quantity"
            name="food_quantity"
            type="number"
            placeholder="Food Quantity"
          />
          <InputBox
            label="Food Price"
            name="food_price"
            type="number"
            defaultValue={foodInfo.food_price}
            readOnly={true}
          />
          <InputBox
            label="Username"
            name="ordered_by_name"
            type="text"
            placeholder=""
            defaultValue={user.displayName}
            readOnly={true}
          />
          <InputBox
            label="Email"
            name="ordered_by_email"
            type="email"
            defaultValue={user.email}
            readOnly={true}
          />

          <div className="form-control mt-6">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </form>
      </div>
    </>
  );
};

PurchaseForm.propTypes = {
  id: PropTypes.string,
};

export default PurchaseForm;
