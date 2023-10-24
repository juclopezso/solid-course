// import axios from 'axios'


// NOTE: uso de un parton adaptador
export class HttpClient {

  // async get( url: string ) {
  //   const { data, status } = await axios.get( url );
  //   console.log(data, status)
  //   return { data, status }
  // }
  
  // Nos piden cambiar axios por fetch, entonces cambiamos el metodo get
  async get( url: string ) {
    const resp = await fetch( url );
    const data = await resp.json()

    return { data, status: resp.status }
  }

}
