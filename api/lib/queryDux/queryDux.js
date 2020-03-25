/**
 * @name queryDux
 * @description 
 *  -Returns a list of all the Dux available
 *  -Returns an Json
 * @version 0.1
 * @author tharun_p
 */

 /* Imports */
 var express = require('express')
 var queryDuxRouter = express.Router()

 /* Routables */

 // QueryDux Landing Page
 queryDuxRouter.get("/", (Request, Response) => {
     Response.json("QueryDux Landing Page");
 })

 // QueryDux Helper Page
 queryDuxRouter.get("/help", (Request, Response) => {
     Response.json("QueryDux Helper Page")
 })

 module.exports = queryDuxRouter