

export const getWebflow = async ( key, one = false, keyDetail="" ) => {
  const accesToken = 'ed2770ed568f942e403fab9300fa760b97eadc3ea3bb5901e025deb8cd4cb3ee'
  const version = '1.0.0'
  // const postKey = '5fa2c45087b41f0f9b713464'
  // const catKey = '5fabfcf448583971dcbcc5c4'
  const getItems = one ? `items/${keyDetail}` : 'items'   
  const endpoint = `https://api.webflow.com/collections/${ encodeURI(key) }/${getItems}?api_version=${version}&access_token=${accesToken}`;
  const resp = await fetch( endpoint );
  const posts = await resp.json()
  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  }
}
