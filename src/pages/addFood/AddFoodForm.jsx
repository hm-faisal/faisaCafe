import InputBox from "../../components/InputBox";
import TextArea from "../../components/TextArea";
import useAuth from "../../hooks/useAuth";
const AddFoodForm = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="max-w-xl mx-auto">
        <form className="card-body">
          <InputBox
            label="Food Name"
            type="text"
            placeholder="enter Food Name"
          />
          <InputBox label="Food URL" type="url" placeholder="enter Food URL" />
          <InputBox
            label="Food category"
            type="text"
            placeholder="enter Food category"
          />
          <InputBox
            label="Food Quantity"
            type="number"
            placeholder="Food Quantity"
          />
          <InputBox label="Food Price" type="number" placeholder="Food Price" />
          <InputBox label="Food Origin" type="text" placeholder="Food Origin" />
          <TextArea
            label="Food Description"
            placeholder="Enter food description"
          />
          <InputBox
            label="Username"
            type="text"
            placeholder=""
            defaultValue={user?.displayName}
            readOnly={true}
          />
          <InputBox
            label="Email"
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
