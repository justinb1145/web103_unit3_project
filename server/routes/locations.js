import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import eventsController from '../controllers/locations.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', eventsController.getEvents)

router.get('/:locationId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/location.html'))
  })

  export default router