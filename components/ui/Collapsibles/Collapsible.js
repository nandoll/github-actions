//import React from "react";
//import Collapse from "@kunukn/react-collapse";

/*export const Collapsible = (prop) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { children, title, classes } = prop;
  const onInit = ({ state, style, node }) => {


    setIsOpen(false);
  };

  return (
    <div className={`${classes}`}>
      <button onClick={() => setIsOpen((state) => !state)}>{title}</button>
      <Collapse onInit={onInit} isOpen={isOpen}>
        <div className="content">{children}</div>
      </Collapse>
    </div>
  );
};
*/

import React, { Component } from "react";
import cx from "classnames";
import Collapse from "@kunukn/react-collapse";

class Collapsible extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    isOpen2: false,
    spy3: {},
  };

  render() {
    const { children, title, classes } = this.props;

    return (
      <div className={`${classes}`}>
        <button
          className={cx("Collapse", {
            "Collapse--active": this.state.isOpen2,
          })}
          onClick={() => this.toggle(2)}
        >
          {title}
        </button>

        <Collapse
          isOpen={this.state.isOpen2}
          className={
            "Collapse__cnt " +
            (this.state.isOpen2 ? "Collapse__cnt--active" : "")
          }
          transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
          aria-hidden={this.state.isOpen2 ? "false" : "true"}
          elementType="article"
          render={(collapseState) => <div className="content">{children}</div>}
        />
      </div>
    );
  }

  toggle = (index) => {
    let collapse = "isOpen" + index;

    this.setState((prevState) => ({ [collapse]: !prevState[collapse] }));
  };
}

export default Collapsible;
