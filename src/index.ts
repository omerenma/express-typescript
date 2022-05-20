 import express from 'express'
import bodyParser from 'body-parser'
import  {router} from './routes/loginRoutes'
import {router as controllerRouter} from './controllers/decorators/controller'
import cookieSession from 'cookie-session';
import './controllers/LoginController'


const app = express()


 app.use(bodyParser.urlencoded({extended:true}))
 // Use cookie to track session
    app.use(cookieSession({keys: ['nnjnfdfkngskfj']}))
 app.use(bodyParser.json())


 app.use(router)
 app.use(controllerRouter)


app.listen(4000, () => {
    console.log('App running on port 4000' )
})

