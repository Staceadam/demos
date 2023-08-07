export const getUser = ({ userData }: { email: string }) => {
    // const findUser: User = await User.findOne({ where: { email: userData.email } });

    return {
        userName: 'FakeName',
        email: 'fakeEmail@email.com'
    }
}
