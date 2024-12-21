const Banner = () => {
  return (
    <header
      className="relative h-screen bg-cover bg-center w-full"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1651750369351-825dae7026a1?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }} // Replace with your image URL
    >
      {/* Overlay to darken the image */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Banner Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <div className="w-full space-y-6 text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide">
            Welcome to The FAISACAFE
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl">
            Indulge in the finest dishes crafted with love and fresh
            ingredients.
          </p>
          <a
            href="#menu"
            className="inline-block mt-4 px-8 py-3 text-lg font-semibold text-white bg-orange-500 rounded-lg transition-colors hover:bg-orange-600"
          >
            Explore All Our delicious foods
          </a>
        </div>
      </div>
    </header>
  );
};

export default Banner;
