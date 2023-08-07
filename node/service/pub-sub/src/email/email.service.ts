import { eventEmitter, Events } from '~/events'

export const sendEmail = ({ email }: { email: string }) => {
    console.log('sent email', { email })
    return {
        userName: 'FakeName',
        email
    }
}
