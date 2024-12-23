import PropTypes from "prop-types";
import InputBox from "../../components/InputBox";
import TextArea from "../../components/TextArea";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const UpdateFoodForm = ({ food }) => {
  const { user } = useAuth();
  const axiosBase = useAxios();
  const navigate = useNavigate();

  const updatedFoodInfo = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const foodInfo = Object.fromEntries(form.entries());

    axiosBase
      .put(`/foods-update/${food._id}`, foodInfo)
      .then((res) => {
        if (res.data.acknowledged) {
          swal("Update", "Food Information updated successfully", "success");
        }
        navigate("/my-added-foods");
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="max-w-xl mx-auto">
        <form className="card-body" onSubmit={updatedFoodInfo}>
          <InputBox
            label="Food Name"
            type="text"
            name="food_name"
            defaultValue={food?.food_name}
          />
          <InputBox
            label="Food Image URL"
            name="food_img_url"
            type="url"
            defaultValue={food?.food_img_url}
          />
          <InputBox
            label="Food category"
            name="food_category"
            type="text"
            defaultValue={food?.food_category}
          />
          <InputBox
            label="Food Quantity"
            name="food_quantity"
            type="number"
            defaultValue={food?.food_quantity.toString()}
          />
          <InputBox
            label="Food Price"
            name="food_price"
            type="number"
            defaultValue={food?.food_price}
          />
          <InputBox
            label="Food Origin"
            type="text"
            name="food_origin"
            defaultValue={food?.food_origin}
          />
          <TextArea
            label="Food Description"
            name="food_description"
            defaultValue={food?.food_description}
          />
          <InputBox
            label="Username"
            name="added_by_name"
            type="text"
            defaultValue={user?.displayName}
            readOnly={true}
          />
          <InputBox
            label="Email"
            name="added_by_email"
            type="email"
            defaultValue={user?.email}
            readOnly={true}
          />

          <div className="form-control mt-6">
            <button className="btn btn-primary">Update Food Info</button>
          </div>
        </form>
      </div>
    </>
  );
};

UpdateFoodForm.propTypes = {
  food: PropTypes.object,
};

export default UpdateFoodForm;
