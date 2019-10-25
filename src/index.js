"use strict"
const { EventEmitter } = require("events")
const server = require("./server/server")
const router = require("./routes/router")
const di = require("./config")
const mediator = new EventEmitter()
const { asValue } = require("awilix")

console.log("--- API Gateway Service ---")
console.log("Connecting to API repository...")

process.on("uncaughtException", err => {
  console.error("Unhandled Exception", err)
})

process.on("uncaughtRejection", (err, promise) => {
  console.error("Unhandled Rejection", err)
})

mediator.on("di.ready", async container => {
  const routes = router.discoverRoutes()
  await container.register({ routes: asValue(routes) })
  const app = await server.start(container)
  console.log(
    `Server started succesfully, API Gateway running on port: ${container.cradle.serverSettings.port}.`
  )
  app.on("close", () => {
    console.log("Server finished")
  })
})

di.init(mediator)

mediator.emit("init")
