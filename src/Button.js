import PropTypes from "prop-types";

function Button({
  children,
  primary,
  success,
  secondary,
  warning,
  danger,
  outline,
  rounded,
}) {
  return <button>{children}</button>;
}

Button.propTypes = {
  checkVariationValue: ({ primary, success, secondary, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!success) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error("Only one of primary, secondary, success, warning, danger can be true");
    }
  },
};

export default Button;
