import { Routes, Route } from "react-router";
import HomeLayout from "../pages/home/HomeLayout";
import AuthLayout from "../pages/auth/AuthLayout";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import AddFoodLayout from "../pages/addFood/AddFoodLayout";
import AllFoodsLayout from "../pages/allFoods/AllFoodsLayout";
import FoodLayout from "../pages/food/FoodLayout";
import PurchaseLayout from "../pages/purchase/PurchaseLayout";
import MyFoodsLayout from "../pages/myFoods/MyFoodsLayout";
import UpdateMyFoodsLayout from "../pages/updateMyFoods/UpdateMyFoodsLayout";
import MyOrdersLayout from "../pages/myOrders/MyOrdersLayout";
import PrivateRoute from "./PrivateRoute";
import Gallery from "../pages/gallery/Gallery";
import FAQPage from "../pages/faq/FAQPage";
import ContactPage from "../pages/contact/ContactPage";
import NotFound from "../pages/404/NotFound";
const Router = () => {
  return (
    <>
      <Routes>
        {/* 404 page */}
        <Route path="*" element={<NotFound />} />

        {/* Home Page  */}
        <Route path="/" element={<HomeLayout />} />

        {/* All Food Page  */}
        <Route path="all-foods" element={<AllFoodsLayout />} />

        {/* Gallery Page  */}
        <Route path="gallery" element={<Gallery />} />

        {/* Food Details Page  */}
        <Route path="foods/:id" element={<FoodLayout />} />

        {/* FAQ Page  */}
        <Route path="faq" element={<FAQPage />} />

        {/* Contact Page  */}
        <Route path="contact" element={<ContactPage />} />

        {/* Add Food Page  */}
        <Route
          path="add-food"
          element={
            <PrivateRoute>
              <AddFoodLayout />
            </PrivateRoute>
          }
        />

        {/* Purchase page  */}
        <Route
          path="purchase/:id"
          element={
            <PrivateRoute>
              <PurchaseLayout />
            </PrivateRoute>
          }
        />

        {/* My added foods page  */}
        <Route
          path="my-added-foods"
          element={
            <PrivateRoute>
              <MyFoodsLayout />
            </PrivateRoute>
          }
        />

        {/* My added foods update page  */}
        <Route
          path="foods-update/:id"
          element={
            <PrivateRoute>
              <UpdateMyFoodsLayout />
            </PrivateRoute>
          }
        />

        {/* My Ordered page  */}
        <Route
          path="my-orders"
          element={
            <PrivateRoute>
              <MyOrdersLayout />
            </PrivateRoute>
          }
        />

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
