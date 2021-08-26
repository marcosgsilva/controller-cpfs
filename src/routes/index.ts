import { Express } from 'express'
import { controlsCpfRouter } from './router'

export const applyRoutes = (app: Express) => {
  app.use('/', controlsCpfRouter)
}
