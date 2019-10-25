"use strict"
const express = require("express")
const proxy = require("http-proxy-middleware")

const start = async container => {
  const { port } = container.resolve("serverSettings")
  const routes = container.resolve("routes")
  if (!routes) {
    throw new Error("The server must be started with routes discovered")
  }
  if (!port) {
    throw new Error("The server must be started with an available port")
  }

  const app = express()

  for (let id of Reflect.ownKeys(routes)) {
    const { route, target } = routes[id]
    app.use(
      route,
      proxy({
        target,
        changeOrigin: true,
        logLevel: "debug"
      })
    )
  }

  const server = app.listen(port)
  return server
}

module.exports = Object.assign({}, { start })
