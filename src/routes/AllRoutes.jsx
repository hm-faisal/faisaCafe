import { Routes, Route } from "react-router";
import HomeLayout from "../pages/home/HomeLayout";
import AuthLayout from "../pages/auth/AuthLayout";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
const Router = () => {
  return (
    <>
      <Routes>
        {/* Home Page  */}
        <Route path="/" element={<HomeLayout />} />

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
