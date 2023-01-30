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
  hover,
  ...rest // rest operator: just tell to this button to take the rest of the additional props; should be js events
}) {

  // truthy; if true display the class assigned.
  const classes = className(rest.className, "flex items-center px-3 py-1.5 my-2", {
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-gray-900 bg-gray-900 text-white": secondary,
    "border-yellow-500 bg-yellow-400 text-white": warning,
    "border-red-500 bg-red-500 text-white": danger,
    "border-green-500 bg-green-500 text-white": success,
    "bg-white border": outline,
    "rounded-full": rounded,
    "text-blue-500": outline && primary,
    "text-red-500": outline && danger,
    "text-gray-900": outline && secondary,
    "text-green-500": outline && success,
    "text-yellow-500": outline && warning,
    "hover:bg-sky-700 hover:text-white": hover && primary,
    "hover:bg-red-700 hover:text-white": hover && danger,
    "hover:bg-green-700 hover:text-white": hover && success,
    "hover:bg-black hover:text-white": hover && secondary,
  });

  return <button {...rest} className={classes}>{children}</button>;
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
