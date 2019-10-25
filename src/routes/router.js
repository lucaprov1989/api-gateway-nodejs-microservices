"use strict"
const Docker = require("dockerode")
const dotenv = require("dotenv").config()

const routes = [
  {
    id: "movies-service",
    name: "movies-service",
    route: "/movies",
    target: `http://${process.env.MOVIES_SERVICE}`
  },
  {
    id: "cinemas-service",
    name: "cinemas-service",
    route: "/cinemas",
    target: `http://${process.env.CINEMAS_SERVICE}`
  }
]

const discoverRoutes = routes => {
  return routes
}

const ioc = discoverRoutes.bind(null, { ...routes })

module.exports = Object.assign({}, { discoverRoutes: ioc, routes })
