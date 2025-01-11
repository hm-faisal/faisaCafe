import { useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setUser, googleSignIn } = useAuth();

  const signInHandler = () => {
    googleSignIn().then((res) => {
      setUser(res.user);
      navigate(location.state ? location?.state : "/");
      swal("Sign In ", "successfully Sign In with Google", "success");
    });
  };
  return (
    <>
      <button
        className="btn text-white bg-orange-500 hover:bg-orange-600  -mt-1"
        onClick={signInHandler}
      >
        Sign In with google{" "}
      </button>
    </>
  );
};

export default SocialLogin;
