import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const { setUser, signUpUserWithEmailPassword, updateUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const registerUserByEmailPassword = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const { name, email, profile, password } = Object.fromEntries(
      form.entries()
    );
    signUpUserWithEmailPassword(email, password)
      .then((res) => {
        updateUser(name, profile)
          .then(() => console.log("user name, Image added"))
          .catch((e) => console.log(e));
        setUser(res.user);
        navigate(location.state ? location?.state : "/");
        swal("Sign In ", "successfully Sign In", "success");
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse gap-12">
            <div className="text-center lg:text-left flex-1">
              <h1 className="text-5xl font-bold">Sign Up now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 w-full  shrink-0 shadow-2xl flex-1">
              <form
                className="card-body"
                onSubmit={registerUserByEmailPassword}
              >
                <div className="form-control">
                  <label className="label">
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
                  <label className="label">
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
                  <label className="label">
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
                  <label className="label">
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
                  <button className="btn btn-primary">Register </button>
                </div>
              </form>
              <div className="card-body -mt-16">
                <div className="divider">OR</div>
                <SocialLogin />

                <div className="text-center my-3">
                  Already sign up before,{" "}
                  <Link
                    to={"/auth/signIn"}
                    className="btn btn-link p-0 h-auto min-h-min text-sm"
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
