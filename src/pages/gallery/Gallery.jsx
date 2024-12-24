import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import GalleryBanner from "./GalleryBanner";
import LightBox from "./LightBox";
import "./gallery.css";
import useDevice from "../../hooks/useDevice";

const Gallery = () => {
  const imgCln = "w-full galleryImg";
  const { darkTheme } = useDevice();

  return (
    <div data-theme={darkTheme ? "dark" : "light"}>
      <Header />
      <GalleryBanner />
      <div className="text-3xl font-bold text-center my-12 text-white">
        See Our Gallery
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto *:relative max-w-6xl">
        <div className="box">
          <img
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/yypwwq1511304979.jpg"
            alt=""
          />
          <div className="overlay">
            <h2>Tuna Nicoise</h2>
            <p>Seafood is any form of sea life regarded as food by humans.</p>
          </div>
        </div>
        <div className="box">
          <img
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/2dsltq1560461468.jpg"
            alt=""
            className={imgCln}
          />
          <div className="overlay">
            <h2>Tuna and Egg Briks</h2>
            <p>Seafood is any form of sea life regarded as food by humans.</p>
          </div>
        </div>
        <div className="box">
          <img
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/spswqs1511558697.jpg"
            alt=""
            className={imgCln}
          />
          <div className="overlay">
            <h2>Three Fish Pie</h2>
            <p>Seafood is any form of sea life regarded as food by humans.</p>
          </div>
        </div>
        <div className="box">
          <img
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/g046bb1663960946.jpg"
            alt=""
            className={imgCln}
          />
          <div className="overlay">
            <h2>Sushi</h2>
            <p>Seafood is any form of sea life regarded as food by humans.</p>
          </div>
        </div>
        <div className="box">
          <img
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/1c5oso1614347493.jpg"
            alt=""
            className={imgCln}
          />
          <div className="overlay">
            <h2>Spring onion and prawn empanadas</h2>
            <p>Seafood is any form of sea life regarded as food by humans.</p>
          </div>
        </div>
        <div className="box">
          <img
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/7ttta31593350374.jpg"
            alt=""
            className={imgCln}
          />
          <div className="overlay">
            <h2>Sledz w Oleju (Polish Herrings)</h2>
            <p>Seafood is any form of sea life regarded as food by humans.</p>
          </div>
        </div>
        <div className="box">
          <img
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/1529445434.jpg"
            alt=""
            className={imgCln}
          />
          <div className="overlay">
            <h2>Shrimp Chow Fun</h2>
            <p>Seafood is any form of sea life regarded as food by humans.</p>
          </div>
        </div>
        <div className="box">
          <img
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/wqqvyq1511179730.jpg"
            alt=""
            className={imgCln}
          />
          <div className="overlay">
            <h2>Seafood fideu\u00e0</h2>
            <p>Seafood is any form of sea life regarded as food by humans.</p>
          </div>
        </div>
        <div className="box">
          <img
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/vytypy1511883765.jpg"
            alt=""
            className={imgCln}
          />
          <div className="overlay">
            <h2>Saltfish and Ackee</h2>
            <p>Seafood is any form of sea life regarded as food by humans.</p>
          </div>
        </div>
        <div className="box">
          <img
            src="https:\/\/www.themealdb.com\/images\/media\/meals\/xxrxux1503070723.jpg"
            alt=""
            className={imgCln}
          />
          <div className="overlay">
            <h2>Salmon Prawn Risotto</h2>
            <p>Seafood is any form of sea life regarded as food by humans.</p>
          </div>
        </div>
      </div>
      <LightBox />
      <Footer />
    </div>
  );
};

export default Gallery;
