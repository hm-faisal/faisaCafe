import { Link } from "react-router-dom";

const Carousel = () => {
  const carouselItems = [
    {
      id: 1,
      title: "Delicious Pasta",
      description: "Enjoy a rich, creamy pasta with our special sauce.",
      imageUrl:
        "https://images.unsplash.com/photo-1603570416072-84068a0f1358?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Plate of creamy pasta",
    },
    {
      id: 2,
      title: "Grilled Steak",
      description: "Juicy and tender steak grilled to perfection.",
      imageUrl:
        "https://images.unsplash.com/photo-1657143375273-75371e23f7f0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Grilled steak on a plate",
    },
    {
      id: 3,
      title: "Veggie Pizza",
      description: "Fresh, healthy veggie pizza with a crispy crust.",
      imageUrl:
        "https://images.unsplash.com/photo-1730929851365-015a0b62ae5b?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Veggie pizza with toppings",
    },
    {
      id: 4,
      title: "Chocolate Cake",
      description: "Indulge in a rich, decadent chocolate cake.",
      imageUrl:
        "https://images.unsplash.com/photo-1623065561776-b346afc11633?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Chocolate cake with a slice taken out",
    },
  ];
  return (
    <>
      <div>
        <div className="carousel w-full h-[65vh]">
          {carouselItems.map((item) => (
            <div
              key={item.id}
              id={`item${item.id}`}
              className="carousel-item w-full relative"
            >
              <img src={item.imageUrl} className="w-full object-cover" />
              <div className="absolute w-full h-full flex justify-center items-center flex-col gap-4 text-white">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide">
                  {item.title}
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl">
                  {item.description}
                </p>
                <Link
                  to={"/all-foods"}
                  className="inline-block mt-4 px-8 py-3 text-lg font-semibold text-white bg-orange-500 rounded-lg transition-colors hover:bg-orange-600"
                >
                  Go to all food
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          {carouselItems.map((item) => (
            <a href={`#item${item.id}`} className="btn btn-xs" key={item.id}>
              {item.id}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
