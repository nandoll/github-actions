import React from "react";
import { MainLayout } from "../components/ui/layout/MainLayout";

export const Error = () => {
  return (
    <MainLayout>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:full mx-auto flex flex-wrap">
            <h1 className="font-sans text-4xl text-gray-500">
              Lo sentimos, la página que estás buscando no existe
            </h1>
            <p className=" text-slg text-gray-500">
              Te invitamos a seguir navegando entre nuestra sección de más
              buscadas o regresa a la página de inicio.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Error;
