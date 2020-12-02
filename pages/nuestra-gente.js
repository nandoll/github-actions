import { MainLayout } from "../components/ui/layout/MainLayout";
import ParallaxVideo from "../components/ui/video/ParallaxVideo";

export default function NuestraGente() {
  const content = {
    sourceMP4: {
      video: "/static/videos/loop-ultima-seccion.mp4",
      poster: "/static/bg/bg6.png",
    },
    sourceIMG: "/static/bg/bg2.png",
    title: "Nuestra gente",
    body:
      "Generamos impacto real en la vida de millones de personas, resolviendo retos ambiciosos, en una cultura emprendedora.",
  };
  return (
    <MainLayout>
      <ParallaxVideo
        source={content.sourceMP4.video}
        // source={content.sourceIMG}
        poster={content.sourceMP4.poster}
        title={content.title}
        body={content.body}
      />
    </MainLayout>
  );
}
