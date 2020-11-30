import { MainLayout } from "../components/ui/layout/MainLayout";
import ParallaxVideo from "../components/ui/video/ParallaxVideo";

export default function NuestraGente() {
  const content = {
    // source: "/static/videos/loop-ultima-seccion.mp4",
    source: "/static/bg/bg6.png",
    title: "Nuestra gente",
    body:
      "Generamos impacto real en la vida de millones de personas, resolviendo retos ambiciosos, en una cultura emprendedora.",
  };
  return (
    <MainLayout>
      <ParallaxVideo
        source={content.source}
        title={content.title}
        body={content.body}
      />
    </MainLayout>
  );
}
