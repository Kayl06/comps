import className from "classnames";

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
  return (
    <button className="text-white px-3 py-1.5 m-2 bg-blue-500 rounded">
      {children}
    </button>
  );
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
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;
