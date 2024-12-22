import PropTypes from "prop-types";

const TextArea = ({ label, placeholder }) => {
  return (
    <>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <textarea
        className="textarea textarea-bordered h-36"
        placeholder={placeholder}
      ></textarea>
    </>
  );
};

TextArea.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

export default TextArea;
