import { NavLink } from "react-router-dom";
const GalleryBanner = () => {
  return (
    <>
      <div
        className="relative h-[65vh] bg-cover bg-center w-full"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1488992783499-418eb1f62d08?q=80&w=1589&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }} // Replace with your image URL
      >
        {/* Overlay to darken the image */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Banner Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div className="w-full space-y-6 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide">
              FaisaCafe&apos;s All Item for You
            </h1>
            <div className="breadcrumbs text-base flex justify-center">
              <ul>
                <li>
                  <NavLink to={"/"} className="breadcrumbs">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/gallery"} className="breadcrumbs">
                    Gallery
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryBanner;
