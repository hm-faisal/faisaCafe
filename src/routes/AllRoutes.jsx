import { Routes, Route } from "react-router";
import HomeLayout from "../pages/home/HomeLayout";
import AuthLayout from "../pages/auth/AuthLayout";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import AddFoodLayout from "../pages/addFood/AddFoodLayout";
import AllFoodsLayout from "../pages/allFoods/AllFoodsLayout";
import FoodLayout from "../pages/food/FoodLayout";
import PurchaseLayout from "../pages/purchase/PurchaseLayout";
const Router = () => {
  return (
    <>
      <Routes>
        {/* Home Page  */}
        <Route path="/" element={<HomeLayout />} />

        {/* Add Food Page  */}
        <Route path="add-food" element={<AddFoodLayout />} />

        {/* All Food Page  */}
        <Route path="all-foods" element={<AllFoodsLayout />} />

        {/* Food Details Page  */}
        <Route path="foods/:id" element={<FoodLayout />} />

        {/* Purchase page  */}
        <Route path="purchase/:id" element={<PurchaseLayout />} />

        {/* Auth Page  */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
