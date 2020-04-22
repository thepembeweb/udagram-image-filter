import express from 'express'
import bodyParser from 'body-parser'
import {
  filterImageFromURL,
  deleteLocalFiles,
  isValidImage,
  isValidUrl
} from './util/util'
;(async () => {
  // Init the Express application
  const app = express()

  // Set the network port
  const port = process.env.PORT || 8082

  // Use the body parser middleware for post requests
  app.use(bodyParser.json())

  // Endpoint to filter an image from a public url
  app.get('/filteredimage', async (req, res) => {
    const { image_url: imageUrl } = req.query

    if (!isValidUrl(imageUrl)) {
      return res.status(400).send({ error: 'image_url is invalid' })
    }

    if (!isValidImage(imageUrl)) {
      return res.status(422).send({ error: 'image_url is not a valid image' })
    }

    try {
      const image = await filterImageFromURL(imageUrl)
      return res.sendFile(image, async () => {
        await deleteLocalFiles([image])
      })
    } catch (error) {
      return res.status(422).send({ error: 'image_url could not be processed' })
    }
  })

  // Root Endpoint
  // Displays a simple message to the user
  app.get('/', async (req, res) => {
    res.send('try GET /filteredimage?image_url={{}}')
  })

  // Start the Server
  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`)
    console.log(`press CTRL+C to stop server`)
  })
})()