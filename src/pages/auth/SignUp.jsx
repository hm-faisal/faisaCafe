import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet";
import useDevice from "../../hooks/useDevice";

const SignUp = () => {
  const { setUser, signUpUserWithEmailPassword, updateUser } = useAuth();
  const { siteName } = useDevice();
  const location = useLocation();
  const navigate = useNavigate();

  const registerUserByEmailPassword = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const { name, email, profile, password } = Object.fromEntries(
      form.entries()
    );
    const validatePassword = (password) => {
      const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      return pattern.test(password);
    };
    if (!validatePassword(password)) {
      swal(
        "Password Validation Failed",
        "Ensure an Uppercase letter, a lowercase letter, Length 6 character Long",
        "error"
      );
      return;
    }
    signUpUserWithEmailPassword(email, password)
      .then((res) => {
        updateUser(name, profile).catch((e) => console.log(e));
        setUser(res.user);
        navigate(location.state ? location?.state : "/");
        swal("Sign Up ", "successfully Registered", "success");
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <div>
        <Helmet>
          <title>Sign Up || {siteName}</title>
        </Helmet>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse gap-12">
            <div className="card bg-base-100 w-full  shrink-0 shadow-2xl flex-1">
              <form
                className="card-body"
                onSubmit={registerUserByEmailPassword}
              >
                <div className="form-control">
                  <label className="label font-bold">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label font-bold">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label font-bold">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Photo URL"
                    name="profile"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label font-bold">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn  text-white bg-orange-500 hover:bg-orange-600">
                    Register{" "}
                  </button>
                </div>
              </form>
              <div className="card-body -mt-16">
                <div className="divider">OR</div>
                <SocialLogin />

                <div className="text-center my-3">
                  Already sign up before,{" "}
                  <Link
                    to={"/auth/signIn"}
                    className=" text-orange-500 hover:text-orange-600 p-0 h-auto min-h-min text-sm"
                  >
                    Go to sign in page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
