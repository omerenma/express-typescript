"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
function auth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403).json({ message: "Not permitted" });
}
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'godwin2341@gmail.com' && password === 'kingsly7') {
        // mark this person as logged in
        req.session = { loggedIn: true };
        console.log(req.session);
        // redirect them to the root route
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
router.get('/', (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
            <div>
                <div>You are logged in</div>
                <a href="/logout">Logout</a>
            </div>
        `);
    }
    else {
        res.send(`
        <div>
        <div>You are not logged in</div>
        <a href="/login">Login</a>
    </div>
        `);
    }
});
router.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', auth, (req, res) => {
    res.send('Welcome to protected route, logged in');
});
