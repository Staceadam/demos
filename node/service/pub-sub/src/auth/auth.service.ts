import { eventEmitter, Events } from '~/events'

export const signUp = ({ email }: { email: string }) => {
    // const findUser: User = await User.findOne({ where: { email: userData.email } });
    // if (findUser) throw new Error(`Email ${userData.email} already exists`);
    // const hashedPassword = await bcrypt.hash(userData.password, 10);
    // const createdUser: User = await User.save({ ...userData, password: hashedPassword });

    eventEmitter.emit(Events.USER_REGISTRATION, { email })

    return {
        userName: 'FakeName',
        email: 'fakeEmail@email.com'
    }
}
