import express from 'express'

const server = express()

server.get('/healthz', (request, response) => {
  return response.status(200).send('OK')
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.log(`Server on: http://localhost:${PORT}`)
})
