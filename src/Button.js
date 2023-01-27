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
  const classes = className("px-3 py-1.5 m-2", {
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-gray-900 bg-gray-900 text-white": secondary,
    "border-yellow-500 bg-yellow-400 text-white": warning,
    "border-red-500 bg-red-500 text-white": danger,
    "border-green-500 bg-green-500 text-white": success,
    "rounded-full": rounded,
    "bg-white border": outline,
    "text-blue-500": outline && primary,
    "text-red-500": outline && danger,
    "text-gray-900": outline && secondary,
    "text-green-500": outline && success,
    "text-yellow-500": outline && warning,
  });

  return <button className={classes}>{children}</button>;
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
