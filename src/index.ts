import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { prettyJSON } from 'hono/pretty-json'
import { user } from './Infrestructure/routes/user/user.routes'
import { product } from './Infrestructure/routes/products/products.routes'

const app = new Hono()
const port = 8000

//middleware
app.use(cors())
app.use(logger())
app.use(prettyJSON())

//routes
app.route("/usuario", user)
app.route("/product", product)

//serve
export default {
  port :port,
  fetch: app.fetch
}

