import express from 'express'

const server = express()

server.get('/healthz', (request, response) => {
  return response.status(200).send('OK')
})

server.post('/teste', (request, response) => {
  console.log('teste')
  return response.redirect('http://localhost:3000/logado.html')
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.log(`Server on: http://localhost:${PORT}`)
})
