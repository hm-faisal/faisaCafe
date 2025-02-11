import { Link } from "react-router";
import useDevice from "../../hooks/useDevice";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const { darkTheme, minHeight, siteName } = useDevice();
  return (
    <>
      <div data-theme={darkTheme ? "dark" : "light"}>
        <Helmet>
          <title>Home || {siteName}</title>
        </Helmet>
        <div
          className={`flex justify-center items-center flex-col min-h-screen`}
        >
          <div className="space-y-2 text-center">
            <h2>
              <span className="text-9xl font-bold text-yellow-700">4</span>
              <span className="text-9xl font-bold text-secondary">0</span>
              <span className="text-9xl font-bold text-yellow-700">4</span>
            </h2>
            <p className="text-2xl font-bold ">Oh ! Page Not Found !!!</p>
            <Link to={"/"} className="btn btn-accent">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
