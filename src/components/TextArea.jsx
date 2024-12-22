import PropTypes from "prop-types";

const TextArea = ({ label, placeholder, name }) => {
  return (
    <>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <textarea
        className="textarea textarea-bordered h-36"
        placeholder={placeholder}
        name={name}
      ></textarea>
    </>
  );
};

TextArea.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
};

export default TextArea;
