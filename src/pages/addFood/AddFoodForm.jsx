import InputBox from "../../components/InputBox";
import TextArea from "../../components/TextArea";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const AddFoodForm = () => {
  const { user } = useAuth();
  const axiosBase = useAxiosSecure();
  const navigate = useNavigate();
  const addFoodHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const foodInfo = Object.fromEntries(form.entries());
    foodInfo.already_sell = 0;

    axiosBase
      .post("/add-food", foodInfo)
      .then((res) => {
        if (res.data) {
          swal("Food Added", "successfully added your food", "success");
          navigate("/my-added-foods");
        }
      })
      .catch((e) =>
        swal(
          "Unauthorize or Forbidden Access",
          `Please Login Again \n Message: ${e.response.data.message}`,
          "warning"
        )
      );
  };
  return (
    <>
      <div className="max-w-xl mx-auto">
        <form className="card-body" onSubmit={addFoodHandler}>
          <InputBox
            label="Food Name"
            type="text"
            name="food_name"
            placeholder="enter Food Name"
          />
          <InputBox
            label="Food Image URL"
            name="food_img_url"
            type="url"
            placeholder="enter Food Image URL"
          />
          <InputBox
            label="Food category"
            name="food_category"
            type="text"
            placeholder="enter Food category"
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
            placeholder="Food Price"
          />
          <InputBox
            label="Food Origin"
            type="text"
            name="food_origin"
            placeholder="Food Origin"
          />
          <TextArea
            label="Food Description"
            name="food_description"
            placeholder="Enter food description"
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
            placeholder=""
            defaultValue={user?.email}
            readOnly={true}
          />

          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Food</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddFoodForm;
