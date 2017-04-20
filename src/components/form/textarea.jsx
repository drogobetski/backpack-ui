import React from "react";
import radium from "radium";
import styles from "./styles";
import propTypes from "../../utils/propTypes";

function TextArea({
  id,
  label,
  name,
  value,
  placeholder,
  required,
  rows,
  cols,
  size,
  theme,
  onChange,
  customStyles,
  maxLength,
}) {
  const style = [styles.base];

  style.push(styles.element.textarea.base);

  if (size) {
    style.push(styles.size[size]);
    style.push(styles.element.textarea.size[size]);
  }

  if (theme) {
    style.push(styles.theme[theme]);
    style.push(styles.element.textarea.theme[theme]);
  }

  if (customStyles) {
    style.push(customStyles);
  }

  return (
    <textarea
      style={style}
      id={id}
      name={name || id}
      value={value}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      required={required}
      onChange={onChange}
      aria-label={label}
      title={label}
      maxLength={maxLength}
    />
  );
}

TextArea.propTypes = {
  id: React.PropTypes.string.isRequired,

  label: React.PropTypes.string.isRequired,

  name: React.PropTypes.string,

  value: React.PropTypes.string,

  placeholder: React.PropTypes.string,

  required: React.PropTypes.bool,

  rows: React.PropTypes.number,

  cols: React.PropTypes.number,

  size: React.PropTypes.oneOf([
    "tiny",
    "small",
    "medium",
    "large",
    "huge",
  ]),

  theme: React.PropTypes.oneOf([
    "base",
    "light",
    "dark",
    "float",
  ]),

  onChange: React.PropTypes.func,

  customStyles: propTypes.style,

  maxLength: React.PropTypes.string,
};

TextArea.defaultProps = {
  id: "",

  label: "",

  name: "",


  placeholder: "",

  required: false,

  rows: 10,

  cols: 0,

  size: "medium",

  theme: "base",

  onChange: null,
};

export default radium(TextArea);