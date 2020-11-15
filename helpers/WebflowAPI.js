import Webflow from 'webflow-api'

export const WebflowAPI = () => {

  const webflow = new Webflow({ token: 'ed2770ed568f942e403fab9300fa760b97eadc3ea3bb5901e025deb8cd4cb3ee' })

  return webflow

}
