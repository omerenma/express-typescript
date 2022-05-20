import { NoResourceAdapterError } from 'admin-bro/types/src/backend/utils/resources-factory/resources-factory';
import {Router, Request, Response, NextFunction} from 'express';

const router = Router()

// This interface is extending all the props of Request
export interface RequestWithBody extends Request {
    body:{[key: string]: string | undefined}

}

function auth(req: Request, res: Response, next: NextFunction): void{
    if(req.session && req.session.loggedIn){
        next()
        return
    }
    res.status(403).json({message: "Not permitted"})
}

  router.get('/login', (req: Request, res:Response) => {
    res.send(
        `
        <form method="POST" action="/login">
            <div>
                <label>Email</label>
                <input name="email" />
            </div>
            <div>
            <label>Password</label>
            <input name="password" type="password" />
        </div>
        <button>Submit</button>
        </form>
       
        `
    )
})

router.post('/login', (req:RequestWithBody, res:Response) => {
    const {email, password} = req.body
    if(email && password && email === 'godwin2341@gmail.com' && password === 'kingsly7'){
        // mark this person as logged in
        req.session = {loggedIn:true}
        console.log(req.session)
        // redirect them to the root route
        res.redirect('/')
    }else{
        res.send('Invalid email or password')
    }

})

router.get('/', (req: Request, res: Response) =>{
    if(req.session &&  req.session.loggedIn){
        res.send( `
            <div>
                <div>You are logged in</div>
                <a href="/logout">Logout</a>
            </div>
        `)
    }else{
        res.send( `
        <div>
        <div>You are not logged in</div>
        <a href="/login">Login</a>
    </div>
        `)
    }
})

router.get('/logout', (req:Request, res:Response) => {
    req.session = undefined
    res.redirect('/')
})

router.get('/protected', auth, (req: Request, res: Response) => {
    res.send('Welcome to protected route, logged in user')
})
export  {router}

