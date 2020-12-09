import React, { Component } from "react";
import Link from "next/link";
import { gsap } from "gsap/dist/gsap";
import { ScrollBtn } from "../Navbar/ScrollBtn";

class OverlayNay extends Component {
  constructor(props) {
    super(props);
    this.titleTween = null;
    this.itemsTween = null;
    this.titleRef = null;
    this.navFixedAList = null;
  }

  componentDidMount() {
    this.titleTween = gsap
      .to(this.titleRef, {
        autoAlpha: 1,
        x: 0,
        duration: 0.3,
      })
      .reverse();

    this.itemsTween = gsap
      .fromTo(
        this.navFixedAList.childNodes,
        {
          autoAlpha: 0,
          x: 200,
        },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.3,
          delay: 0.5,
        }
      )
      .reverse();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.visible !== this.props.visible) {
      this.titleTween.reversed(!this.props.visible);
      this.itemsTween.reversed(!this.props.visible);
    }
  }

  render() {
    return (
      <div
        className="fixed inset-0 z-30 flex flex-row justify-center items-center bg-blue-500 nav--fixed"
        id="fixed-nav"
        ref={(e) => (this.titleRef = e)}
      >
        <div className="container flex flex-row justify-center px-8 lg:px-0">
          <div className="w-full lg:w-5/6">
            <nav
              className="grid grid-cols-1 md:gap-x-4 gap-y-6 md:gap-y-8 lg:gap-y-12 md:grid-cols-2 lg:grid-cols-3 text-white nav--main"
              ref={(e) => (this.navFixedAList = e)}
            >
              <Link href="/proposito">
                <a className="border-l border-white pl-3 inline-block lg:col-span-3">
                  Nuestro propósito
                </a>
              </Link>
              <Link href="/nuestra-gente">
                <a className="border-l border-white pl-3 inline-block">
                  Nuestra gente
                </a>
              </Link>
              <Link href="/innovacion">
                <a className="border-l border-white pl-3 inline-block">
                  Innovación de impacto
                </a>
              </Link>
              <Link href="/aprendizaje">
                <a className="border-l border-white pl-3 inline-block">
                  Aprendizaje continuo
                </a>
              </Link>

              <Link href="/noticias">
                <a className="border-l border-white pl-3 inline-block">
                  Noticias
                </a>
              </Link>

              <a
                className="border-l border-white pl-3 inline-block"
                href="#footer-main"
              >
                Noticias
              </a>

              <ScrollBtn
                text="Información corporativa"
                target="#footer-main"
                btnStyle="border-l border-white pl-3 inline-block"
                navParent={this.navFixed}
                onClick={this.handleClick}
              />

              <Link href="https://enterate.somosintercorp.net/" target="_blank">
                <a className="border-l border-white pl-3 inline-block">
                  Entérate.SomosIntercorp.net
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default OverlayNay;
