import React, { useSate } from "react";

const withToggle = (Component) => {
  const [isOpen, setIsOpen] = useSate(false);
  const toggle = () => {
    setIsOpen((state) => !state);
  };
  return (props) => <Component {...props} isOpen={isOpen} toggle={toggle} />;
};

export default withToggle;
