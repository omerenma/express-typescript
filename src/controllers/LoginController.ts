import {Request, Response} from 'express'
import {get} from './decorators/routes'
import {controller} from './decorators/controller'

@controller('/auth')
class LoginController {
@get('/login')
  getLogin(req: Request, res:Response){
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
}
}