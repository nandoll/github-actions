import { useEffect, useState } from "react"
import { getWebflow } from "../helpers/getWebflow"


export const useFetchWebflow = ( key, one = false, keyDetail="") => {
  useEffect(() => {
    getWebflow(key, one = false, keyDetail="")
    .then( data => {
      setstate({
        data
      })
    })
  }, [key])

  const [state, setstate] = useState({
    data:[]
  })

  return state;
}
