const API_URL = "https://modobetaintercorp.azurewebsites.net/api/";
const ENDPOINTS = {
  NEWS: "obtener-noticias",
  NEWSHOME: "obtener-noticias-home",
  NEWSDETAIL: "detalle-noticia",
  CATS: "obtener-categorias",
};

/**
 * 
 * ### WEBSITE ###

GET http://urldeapi/api/obtener-idiomas   (hecho)
{
}

GET http://urldeapi/api/obtener-noticias-home      (hecho)
{
	"id_idioma" : 1
}

GET http://urldeapi/api/noticias-por-seccion   (hecho)
{
	"id_idioma" : 1,
	"seccion" : 2, //la pagina id
	"destacado" : 1
}

GET http://urldeapi/api/obtener-noticias      (hecho)
{
	"id_idioma" : 1,
	"tipo_articulo" : "M",
	"categorias" : [1, 4],
	"pagina" : 3,
	"cantidad" : 20
}

GET http://urldeapi/api/detalle-noticia      (hecho)
{
    "slug": "mi-noticia-123",
    "id_noticia : 1,
	"id_idioma" : 1
}

GET http://urldeapi/api/obtener-categorias      (hecho)
{
    "id_idioma" : 1
}

GET http://urldeapi/api/informacion-financiera      (hecho)
{
	"id_idioma" : 1
}
 */

async function fetchAPI(endpoint, raw = {}) {
  const res = await fetch(API_URL + endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...raw,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json;
}
// #1 apiNoticias obtener-noticias
export async function getAllNews(raw) {
  const data = (await fetchAPI(ENDPOINTS.NEWS, raw)) ?? [];
  return data;
}

export async function getAllCats(raw = {}) {
  const data = await fetchAPI(ENDPOINTS.CATS, raw);
  return data;
}

export async function getHomeNews(raw = {}) {
  const data = (await fetchAPI(ENDPOINTS.NEWSHOME, raw)) ?? [];
  return data;
}
export async function getNewsDetail(raw = {}) {
  const data = await fetchAPI(ENDPOINTS.NEWSDETAIL, raw);
  return data;
}
