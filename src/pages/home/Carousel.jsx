import { Link } from "react-router-dom";

const Carousel = () => {
  const carouselItems = [
    {
      id: 1,
      title: "Delicious Pasta",
      description: "Enjoy a rich, creamy pasta with our special sauce.",
      imageUrl:
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/12/27/0/FNK_antipasti-penne_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1388282548547.jpeg",
      altText: "Plate of creamy pasta",
    },
    {
      id: 2,
      title: "Grilled Steak",
      description: "Juicy and tender steak grilled to perfection.",
      imageUrl:
        "https://cdn.momsdish.com/wp-content/uploads/2021/06/Ribeye-Steak-Recipe09.jpg",
      altText: "Grilled steak on a plate",
    },
    {
      id: 3,
      title: "Veggie Pizza",
      description: "Fresh, healthy veggie pizza with a crispy crust.",
      imageUrl:
        "https://whattheforksfordinner.com/wp-content/uploads/2018/05/DSC_0012-1.jpg",
      altText: "Veggie pizza with toppings",
    },
    {
      id: 4,
      title: "Chocolate Cake",
      description: "Indulge in a rich, decadent chocolate cake.",
      imageUrl:
        "https://www.thespruceeats.com/thmb/w282FiA18oOHgNqftYbo93B5an8=/5928x3957/filters:fill(auto,1)/classic-and-easy-chocolate-cake-recipe-995137-hero-01-e361ee51a67d4c12afb451cc48fb1940.jpg",
      altText: "Chocolate cake with a slice taken out",
    },
  ];
  return (
    <>
      <div>
        <div className="carousel w-full">
          {carouselItems.map((item) => (
            <div
              key={item.id}
              id={`item${item.id}`}
              className="carousel-item w-full relative"
            >
              <img src={item.imageUrl} className="w-full max-h-[80vh]" />
              <div className="absolute w-full h-full flex justify-center items-center flex-col gap-4">
                <h2 className="text-4xl font-bold text-black">{item.title}</h2>
                <p className="text-lg text-black text-center">
                  {item.description}
                </p>
                <Link to={"/all-foods"} className="btn btn-neutral">
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
