import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Tab extends PureComponent {
  handleClick = () => {
    this.props.handleClick(this.props.tabIndex);
  };

  render() {
    let { title, icon, key } = this.props;

    return (
      <li
        className={`flex-1 relative cursor-pointer pb-5 ${
          this.props.selected ? "active" : ""
        }`}
        onClick={this.handleClick}
        key={key}
      >
        <div className="relative flex flex-col items-center">
          <h4 className="relative z-10 w-full flex flex-row lg:flex-col items-center mb-3 lg:mb-0">
            <i
              className={`flex flex-row justify-center items-center border border-dashed rounded-full leading-none text-3xl mb-3 ${icon}`}
            ></i>
            <span className="font-semibold inline-block leading-none text-lg text-center">
              {title}
            </span>
          </h4>
        </div>
      </li>
    );
  }
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  tabIndex: PropTypes.number,
  selected: PropTypes.bool,
};

export default Tab;
