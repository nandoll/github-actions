import { MainLayout } from "../components/ui/layout/MainLayout";
export default function Home() {
  return (
    <MainLayout>
      <section className="py-8 lg:py-5 relative index-10">
        <div className="w-full flex flex-row items-center">
          <div className="container flex flex-col items-center">
            <div className="w-full lg:w-5/6 lg:mb-10 px-5 lg:px-0 text-center">
              <a
                className="inline-block rounded-xl border border-dotted border-blue-500 text-blue-500 text-sm px-5 py-2 leading-none"
                href="#"
              >
                Ver todas las empresas
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
