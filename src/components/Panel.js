import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  const classes = classNames(
    className,
    "py-3 px-3 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 w-full"
  );

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
}

export default Panel;
