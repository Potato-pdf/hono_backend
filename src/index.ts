import { Hono } from 'hono'

const app = new Hono()
const port = 8000



export default {
  port :port,
  fetch: app.fetch
}

console.log(`Bun it is located in port  ${port}`)
