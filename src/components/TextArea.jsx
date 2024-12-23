import PropTypes from "prop-types";

const TextArea = ({ label, placeholder, defaultValue, readOnly, name }) => {
  return (
    <>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <textarea
        className="textarea textarea-bordered h-36"
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue && defaultValue}
        readOnly={readOnly && true}
      ></textarea>
    </>
  );
};

TextArea.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  readOnly: PropTypes.bool,
};

export default TextArea;
