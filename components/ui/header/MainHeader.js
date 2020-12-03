import React, { Component } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

import OverlayNav from "./OverlayNav";

class MainHeader extends Component {
  navContent = React.createRef();
  navFixed = React.createRef();
  navFixedAList = React.createRef();

  t = gsap.timeline();

  constructor(props) {
    super(props);

    this.state = {
      name: "Toggle Title",
      visible: false,
    };

    this.hello = React.createRef();

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.t.to(this.navContent.current, {
        y: 55,
        opacity: 1,
        duration: 0.5,
        ease: "cubic-bezier(0.48, 0, 0.12, 1)",
      });
    }, 2500);
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    const { type } = this.props;

    return (
      <>
        <nav
          className="fixed z-40 inset-x-0 top-0 px-4 nav--top"
          ref={this.navContent}
        >
          <div className="container">
            <div className="flex flex-row justify-between items-center">
              <a
                className="relative flex flex-row opacity-75 cnt--logo"
                href="/"
                id="logo"
              >
                <figure className="relative mr-2">
                  <img
                    src="/static/img/imago.svg"
                    width="32"
                    height="31"
                    id="imago-logo"
                  />
                </figure>
                <figure className="relative">
                  <img
                    src="/static/img/tipo.svg"
                    width="122"
                    height="31"
                    id="tipo-logo"
                  />
                </figure>
              </a>

              <nav className="text-gray-200 text-lg nav--langs">
                <a
                  className="hidden lg:inline-block leading-none active"
                  href="#"
                  data-lang="es"
                >
                  ES
                </a>
                <span className="hidden lg:inline-block leading-none">|</span>
                <a
                  className="hidden lg:inline-block leading-none"
                  href="#"
                  data-lang="en"
                >
                  EN
                </a>

                <button
                  className="px-4 burger--main"
                  type="button"
                  onClick={this.toggleMenu}
                >
                  <span
                    className={`${
                      type == "home" ? "bg-gray-200" : "bg-blue-500"
                    }`}
                  ></span>
                  <span
                    className={`${
                      type == "home" ? "bg-gray-200" : "bg-blue-500"
                    }`}
                  ></span>
                  <span
                    className={`${
                      type == "home" ? "bg-gray-200" : "bg-blue-500"
                    }`}
                  ></span>
                </button>
              </nav>
            </div>
          </div>
        </nav>

        <OverlayNav visible={this.state.visible} ref={this.hello} />
      </>
    );
  }
}

export default MainHeader;
