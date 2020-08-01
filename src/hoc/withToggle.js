// import React, { useSate } from "react";

// const withToggle = (Component) => {
//   const [isOpen, setIsOpen] = useSate(false);
//   const toggle = () => {
//     setIsOpen((state) => !state);
//   };
//   return (props) => <Component {...props} isOpen={isOpen} toggle={toggle} />;
// };

// export default withToggle;


import React, { Component } from "react";
const withToggle = (NestedComponent) => {

  return class extends Component {
    state = {
      isOpen: false,
    };
    toggle = () => {
      this.setState((prev) => ({
        isOpen: !prev.isOpen,
      }));
    };
    render() {
      const { isOpen } = this.state;
      return <NestedComponent {...this.props} open={isOpen} toggle={this.toggle} />;
    }
  };
};
export default withToggle;