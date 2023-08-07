import { Router } from 'express'

export const userRouter = Router()

userRouter.get('/user', (req, res) => {
    console.log('sent')
    res.json({
        email: 'test@test.com',
        name: 'Test Person'
    })
})
