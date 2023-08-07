import express from 'express'
import { authRouter } from '~/auth/auth.router'
import { sendEmail } from '~/email/email.service'
import { Events, eventEmitter } from '~/events'
import { userRouter } from '~/user/user.router'

const app = express()
const port = 3000

app.use(express.json())
app.use('/v1', [authRouter, userRouter])

eventEmitter.addListener(Events.USER_REGISTRATION, sendEmail)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
