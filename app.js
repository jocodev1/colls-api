"use strict"

const express       = require('express')
const bodyParser    = require('body-parser')
const mongoose      = require('mongoose')
const config        = require('./config/config')
const middleware    = require('./src/middleware/_common/header')

// DB Configuration
mongoose.connect(config.database)

// App Configuration
const app = module.exports = express()

const Routes        = new (require('./lib/build/routes'))(app)
const RouteRegister = new (require('./lib/register/routeRegister.js'))()

app.use(middleware.adjustHeaders)
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.set('superSecret', config.secret)

// register route files
Routes.build(
  RouteRegister.use('_auth/auth').concat(
  RouteRegister.use('default')
))

// app.listen(process.env.PORT || 3000)
app.listen(3000)