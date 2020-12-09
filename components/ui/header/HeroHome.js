import React, { createRef, Component } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

class HeroHome extends Component {
  title = createRef();
  afterTitle = createRef();
  contentTitle = createRef();

  constructor() {
    super();
  }

  componentDidMount() {
    gsap.to(this.contentTitle.current, {
      backgroundColor: "rgba(0, 0, 0, 1)",
      duration: 0.5,
      ease: "cubic-bezier(0.48, 0, 0.12, 1)",
    });

    setTimeout(() => {
      gsap.to(this.afterTitle.current, {
        scaleX: 1,
        transformOrigin: "100% 50%",
        duration: 0.3,
        ease: "cubic-bezier(0.48, 0, 0.12, 1)",
      });
    }, 500);

    setTimeout(() => {
      gsap.to(this.afterTitle.current, {
        scaleX: 0,
        transformOrigin: "0% 50%",
        duration: 1,
      });
    }, 2000);

    setTimeout(() => {
      gsap.to(this.contentTitle.current, {
        backgroundColor: "rgba(0, 0, 0, 0)",
        duration: 1.25,
      });
    }, 2000);
  }

  render() {
    return (
      <section
        className="h-screen w-full relative z-10 section--home__main"
        id="section-main"
        ref={this.contentTitle}
        style={{ backgroundColor: `white` }}
      >
        <div className="w-full h-full flex flex-row items-center">
          <div className="container  px-5">
            <h1
              className="font-serif font-black text-white text-3xl xl:text-6xl pb-5 relative"
              ref={this.title}
            >
              Hacemos que el Perú sea el mejor lugar para formar una familia en
              América Latina.
              <span
                className="absolute bottom-0 left-0 block w-20 border-b border-white scale-x-0"
                ref={this.afterTitle}
              ></span>
            </h1>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroHome;
