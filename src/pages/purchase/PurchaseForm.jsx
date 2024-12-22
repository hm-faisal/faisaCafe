import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import InputBox from "../../components/InputBox";
import moment from "moment";
import swal from "sweetalert";

const PurchaseForm = ({ id }) => {
  const { user } = useAuth();
  const axiosBase = useAxios();
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
    const foodInfo = Object.fromEntries(form.entries());

    axiosBase
      .post(`/buy/${id}`, foodInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          swal("Food Ordered", `${res.data.message}`, "success");
        }
      })
      .catch((e) => console.log(e));
  };

  console.log(user);
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
            label="Food Buying Date"
            type="date"
            name="food_Buy_Date"
            defaultValue={moment().format("YYYY-MM-DD")}
          />
          <InputBox
            label="Username"
            name="added_by_name"
            type="text"
            placeholder=""
            defaultValue={user?.displayName}
            readOnly={true}
          />
          <InputBox
            label="Email"
            name="added_by_email"
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
