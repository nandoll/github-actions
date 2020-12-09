import React, { Component } from "react";
import Collapsible from "../Collapsibles/Collapsible";

class InformacionFinanciera extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container flex flex-row justify-center popup--content">
        <div className="w-full lg:w-11/12">
          <header>
            <h2 className="text-center text-xl lg:text-3xl xl:text-4xl mb-6 lg:mb-10">
              Información financiera
            </h2>
          </header>

          <section>
            <Collapsible title="2020" classes="Collapse Collapse--parent">
              <Collapsible
                title="Segundo trimestre"
                classes="Collapse Collapse--child"
              >
                <p>
                  <a
                    href="https://www.intercorp.com.pe/informacion-financiera/2020/segundo-trimestre/Financial-Statements-Consolidated-2Q20.pdf"
                    target="_black"
                    title="Financial Statements Consolidated"
                  >
                    Consolidada
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.intercorp.com.pe/informacion-financiera/2020/segundo-trimestre/Financial-Statements-Unconsolidated-2Q20.pdf"
                    target="_black"
                    title="Individual"
                  >
                    Individual
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.intercorp.com.pe/informacion-financiera/2020/segundo-trimestre/MDA-Intercorp-2Q20.pdf"
                    target="_black"
                    title="Financial Statements Consolidated"
                  >
                    Análisis y Discusión de la Gerencia
                  </a>
                </p>
              </Collapsible>
            </Collapsible>
          </section>
        </div>
      </div>
    );
  }
}

export default InformacionFinanciera;
