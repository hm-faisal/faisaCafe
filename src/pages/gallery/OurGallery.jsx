import LightBox from "./LightBox";

const OurGallery = () => {
  const images = [
    {
      title: "Beef",
      thumb: "https://www.themealdb.com/images/category/beef.png",
      description:
        "Beef is the culinary name for meat from cattle, particularly skeletal muscle.",
    },
    {
      title: "Chicken",
      thumb: "https://www.themealdb.com/images/category/chicken.png",
      description:
        "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl.",
    },
    {
      title: "Dessert",
      thumb: "https://www.themealdb.com/images/category/dessert.png",
      description: "Dessert is a course that concludes a meal.",
    },
    {
      title: "Lamb",
      thumb: "https://www.themealdb.com/images/category/lamb.png",
      description:
        "Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages.",
    },
    {
      title: "Miscellaneous",
      thumb: "https://www.themealdb.com/images/category/miscellaneous.png",
      description: "General foods that don't fit into another category",
    },
    {
      title: "Pasta",
      thumb: "https://www.themealdb.com/images/category/pasta.png",
      description:
        "Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily.",
    },
    {
      title: "Pork",
      thumb: "https://www.themealdb.com/images/category/pork.png",
      description:
        "Pork is the culinary name for meat from a domestic pig (Sus scrofa domesticus).",
    },
    {
      title: "Seafood",
      thumb: "https://www.themealdb.com/images/category/seafood.png",
      description:
        "Seafood is any form of sea life regarded as food by humans. ",
    },
    {
      title: "Side",
      thumb: "https://www.themealdb.com/images/category/side.png",
      description:
        "A side dish, sometimes referred to as a side order, side item, or simply a side, is a food item that accompanies the entrée or main course at a meal.",
    },
    {
      title: "Starter",
      thumb: "https://www.themealdb.com/images/category/starter.png",
      description:
        "An entrée in modern French table service and that of much of the English-speaking world (apart from the United States and parts of Canada) is a dish served before the main course of a meal.",
    },
  ];

  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto *:relative max-w-6xl w-full ">
          {images.map((img, i) => (
            <LightBox key={i} img={img} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OurGallery;
