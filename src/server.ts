import express from 'express'
const app = express()

app.get('/', (request:any, response:any)=>{
  console.log("TESTE")
  return response.json()
})

app.listen(3333)