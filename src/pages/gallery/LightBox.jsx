import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function LightBox() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block mx-auto my-12 text-center btn btn-success"
      >
        Open Gallery Slide
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: "https://www.themealdb.com/images/media/meals/yypwwq1511304979.jpg",
          },
          {
            src: "https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg",
          },
          {
            src: "https://www.themealdb.com/images/media/meals/spswqs1511558697.jpg",
          },
          {
            src: "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg",
          },
          {
            src: "https://www.themealdb.com/images/media/meals/1c5oso1614347493.jpg",
          },
          {
            src: "https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg",
          },
          {
            src: "https://www.themealdb.com/images/media/meals/1529445434.jpg",
          },
          {
            src: "https://www.themealdb.com/images/media/meals/wqqvyq1511179730.jpg",
          },
          {
            src: "https://www.themealdb.com/images/media/meals/vytypy1511883765.jpg",
          },
          {
            src: "https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg",
          },
        ]}
      />
    </>
  );
}
