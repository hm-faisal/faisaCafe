import PropTypes from "prop-types";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./gallery.css";

export default function LightBox({ img }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div
        type="button"
        onClick={() => setOpen(true)}
        className="block mx-auto my-12 text-center"
      >
        <div className="box">
          <img src={img.thumb} alt="" />
          <div className="overlay rounded-md">
            <h2>{img.title}</h2>
            <p>{img.description}</p>
          </div>
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: img.thumb,
          },
        ]}
      />
    </>
  );
}

LightBox.propTypes = {
  img: PropTypes.object,
};
