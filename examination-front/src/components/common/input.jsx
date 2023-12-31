const Input = ({ theme, name, label, error, ...rest }) => {
  return (
    <div className="form-group my-1">
      <label htmlFor={name}>
        {label}
        {rest.required && <span className="text-danger ms-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        className={["form-control mb-1", error && "is - invalid"]
          .filter(Boolean)
          .join(" ")}
        {...rest}
      />
      <span className="invalid-feedback text-danger mb-5">{error}</span>
    </div>
  );
};

export default Input;
