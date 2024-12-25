import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import MyFoodsCard from "./MyFoodsCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import swal from "sweetalert";
import useDevice from "../../hooks/useDevice";
import { Helmet } from "react-helmet";

const MyFoodsLayout = () => {
  const axiosBase = useAxiosSecure();
  const { user } = useAuth();
  const [myFoods, setMyFoods] = useState([]);
  const { darkTheme, siteName } = useDevice();

  useEffect(() => {
    axiosBase
      .get(`/all-my-foods?email=${user.email}`)
      .then((res) => setMyFoods(res.data))
      .catch((e) =>
        swal(
          "Unauthorize or Forbidden Access",
          `Please Login Again \n Message: ${e.response.data.message}`,
          "warning"
        )
      );
  }, []);
  return (
    <div data-theme={darkTheme ? "dark" : "light"}>
      <Helmet>
        <title> My Foods || {siteName}</title>
      </Helmet>
      <Header />
      <h2 className="text-4xl sm:text-5xl my-8 font-bold tracking-wide text-center">
        All Food Added By {user.displayName}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-4 md:m-10">
        {myFoods.map((food) => (
          <MyFoodsCard key={food._id} food={food} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MyFoodsLayout;
