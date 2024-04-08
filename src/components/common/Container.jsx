import classNames from "classnames";

const Container = ({ children, className }) => {
  return (
    <div className={classNames("max-w-[1400px] mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
