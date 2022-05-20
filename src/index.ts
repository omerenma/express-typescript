 import express from 'express'
import bodyParser from 'body-parser'
import  {router} from './routes/loginRoutes'
import cookieSession from 'cookie-session';


const app = express()


 app.use(bodyParser.urlencoded({extended:true}))
 // Use cookie to track session
    app.use(cookieSession({keys: ['nnjnfdfkngskfj']}))
 app.use(bodyParser.json())


 app.use(router)


app.listen(4000, () => {
    console.log('App running on port 4000' )
})

