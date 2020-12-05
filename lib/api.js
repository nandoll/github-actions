const API_URL = "https://modobetaintercorp.azurewebsites.net/api/";
const ENDPOINTS = {
  NEWS: "obtener-noticias",
  NEWSHOME: "obtener-noticias-home",
  NEWSDETAIL: "detalle-noticia",
  CATS: "obtener-categorias",
};

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
  const data = await fetchAPI(ENDPOINTS.NEWS, raw);
  return data;
}

export async function getAllCats(raw = {}) {
  const data = await fetchAPI(ENDPOINTS.CATS, raw);
  return data;
}

export async function getHomeNews(raw = {}) {
  const data = await fetchAPI(ENDPOINTS.NEWSHOME, raw);
  return data;
}
export async function getNewsDetail(raw = {}) {
  const data = await fetchAPI(ENDPOINTS.NEWSDETAIL, raw);
  return data;
}
