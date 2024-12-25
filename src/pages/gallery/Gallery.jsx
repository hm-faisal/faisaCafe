import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import GalleryBanner from "./GalleryBanner";
import "./gallery.css";
import useDevice from "../../hooks/useDevice";
import OurGallery from "./OurGallery";
import { Helmet } from "react-helmet";

const Gallery = () => {
  const { darkTheme, siteName } = useDevice();

  return (
    <div data-theme={darkTheme ? "dark" : "light"}>
      <Helmet>
        <title>Gallery || {siteName}</title>
      </Helmet>
      <Header />
      <GalleryBanner />
      <div className="text-3xl font-bold text-center my-12 text-white">
        See Our Gallery
      </div>

      <OurGallery />
      <Footer />
    </div>
  );
};

export default Gallery;
