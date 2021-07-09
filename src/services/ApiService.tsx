// import https from 'https'
export const axios = require('axios').default

export const service = axios.create({
  baseURL: "Some server url",
  // httpsAgent: new https.Agent({
  //   rejectUnauthorized: false
  // })
})
