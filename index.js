const jsonServer = require("json-server")
const server = jsonServer.create()
const router = jsonServer.router("db.json")
const middlewares = jsonServer.defaults()
const port = 4000
const cors = require("cors");


app.use(cors())
server.use(middlewares)
server.use(router)
server.listen(port, () => {
    console.log("json server is running")
})