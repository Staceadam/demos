import { EventEmitter } from 'events'

export const Events = {
    USER_REGISTRATION: 'user-registered'
}

export const eventEmitter = new EventEmitter()
