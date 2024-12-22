import PropTypes from "prop-types";

const InputBox = ({
  label,
  type,
  placeholder,
  defaultValue,
  readOnly,
  name,
}) => {
  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="input input-bordered"
          defaultValue={defaultValue && defaultValue}
          readOnly={readOnly && true}
          required
        />
      </div>
    </>
  );
};

InputBox.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  name: PropTypes.string,
  readOnly: PropTypes.bool,
};

export default InputBox;
