import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const MyOrders = () => {
  const { user } = useAuth();
  const axiosBase = useAxios();
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    axiosBase
      .get(`/ordered?email=${user.email}`)
      .then((res) => setMyOrders(res.data))
      .catch((e) => console.log(e));
  }, []);

  const deleteOrder = (id) => {
    console.log(id);
    axiosBase.delete(`/delete/${id}`).then((res) => console.log(res.data));
  };
  return (
    <>
      <div className="totalOrder text-center text-3xl mt-12">
        {myOrders.length} order found
      </div>
      <div className="overflow-x-auto my-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Food Info</th>
              <th>Ordered Time</th>
              <th>Owner</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order) => (
              <>
                <tr key={order._id}>
                  <th></th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={order.food_img_url} alt="item image" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{order.food_name}</div>
                        <div className="text-sm opacity-50">
                          {order.food_price} $
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{order.OrderTime}</td>
                  <td>{order.food_owner}</td>
                  <td>{order.food_quantity}</td>
                  <th>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                    >
                      Cancel Order
                    </button>
                  </th>
                </tr>
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box flex justify-center items-center flex-col">
                    <h3 className="font-bold text-lg">Cancel Order !</h3>
                    <p className="py-4">This process cannot be undo</p>
                    <div className="modal-action">
                      <form method="dialog">
                        <button
                          className="btn mr-2"
                          onClick={() => deleteOrder(order._id)}
                        >
                          Process
                        </button>
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyOrders;
