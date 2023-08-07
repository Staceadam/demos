import { Router } from 'express'
import * as authService from './auth.service'

export const authRouter = Router()

authRouter.post('/signup', (req, res) => {
    console.log({ body: req.body })
    authService.signUp({ email: req.body.email })
    res.json({
        token: '123456'
    })
})
