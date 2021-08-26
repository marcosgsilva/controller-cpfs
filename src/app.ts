import * as dotenv from 'dotenv'
import express from 'express'
import { applyRoutes } from './routes'

dotenv.config()
export const app = express()

applyRoutes(app)
