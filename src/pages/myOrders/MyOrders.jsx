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

  console.log(myOrders);
  return (
    <>
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
                  <button className="btn btn-ghost btn-xs">Cancel Order</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyOrders;
