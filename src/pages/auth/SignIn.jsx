import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet";
import useDevice from "../../hooks/useDevice";

const SignIn = () => {
  const { setUser, signInUserWithEmailPassword } = useAuth();
  const { siteName } = useDevice();
  const location = useLocation();
  const navigate = useNavigate();

  const SignInUserByEmailPassword = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const { email, password } = Object.fromEntries(form.entries());
    signInUserWithEmailPassword(email, password)
      .then((res) => {
        setUser(res.user);
        navigate(location.state ? location?.state : "/");
        swal("Sign In ", "successfully Sign In", "success");
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Helmet>
        <title>Sign In || {siteName}</title>
      </Helmet>
      <div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse gap-12">
            <div className="card bg-base-100 w-full  shrink-0 shadow-2xl flex-1">
              <form className="card-body" onSubmit={SignInUserByEmailPassword}>
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
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <button
                      onClick={() => {
                        swal(
                          "Forgot Your Password",
                          "Your Request is being processing",
                          "warning"
                        );
                      }}
                      className="text-sky-900"
                    >
                      Forget Password ?
                    </button>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign In</button>
                </div>
              </form>
              <div className="card-body -mt-16">
                <div className="divider">OR</div>
                <SocialLogin />

                <div className="text-center my-3">
                  don&apos;t sing up before,{" "}
                  <Link
                    to={"/auth/signUp"}
                    className="btn btn-link p-0 h-auto min-h-min text-sm"
                  >
                    Go to sign up page
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

export default SignIn;
