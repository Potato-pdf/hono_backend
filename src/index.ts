import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { prettyJSON } from 'hono/pretty-json'
import { user } from './Infrestructure/routes/user/user.routes'
import { product } from './Infrestructure/routes/products/products.routes'
import { AppDataSource } from './Infrestructure/config/database/db.conection'
import { auth } from './Infrestructure/routes/auth/auth.routes'

const app = new Hono()
const port = 8000

//middleware
app.use(cors())
app.use(logger())
app.use(prettyJSON())

//routes
app.route("/user", user)
app.route("/product", product)
app.route("/auth", auth)

//Server
AppDataSource.initialize()
  .then(()=>{
  console.log("successful postgres connection"); 
  Bun.serve({
  port :port,
  fetch: app.fetch
});
  console.log(`Server it is up on ${port}`)})
  
  .catch((err)=>{
    console.error("Fatal error to connect to database",err)
  })

