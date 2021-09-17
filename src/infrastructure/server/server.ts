import * as dotenv from 'dotenv'
import express from 'express'
import { MongoHelper } from '../helper/mongodb/mongo-helper'
import { applyRoutes } from '../../routes'
export const app = express()

dotenv.config()
MongoHelper.connect(process.env.MONGO_URL)
  .then(async () => {
    const app = (await import('../../app')).app
    app.get('/', (request: any, response: any) => {
      return response.json()
    })
  })
applyRoutes(app)

app.listen(3333)
