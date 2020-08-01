import React, { Component } from "react";

const withToggle = (Component) => {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const toggle = () => {
  //     setIsOpen((state) => !state);
  //   };
  //   return (props) => <Component {...props} isOpen={isOpen} toggle={toggle} />;
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
      return <Component {...this.props} open={isOpen} toggle={this.toggle} />;
    }
  };
};

export default withToggle;
