import { UserRepository } from "../Repository/UserRepository";
import { UserServices } from "../Services/UserServices";
import { userType } from "../Types/UserTypes";
import User from "../database/models/usuario";

describe('Serviços de usuarios', () => {
    let userServices: UserServices;
    const userRepository = new UserRepository();

    beforeAll(async () => {
        userServices = new UserServices(userRepository);
    });

    it('Deve registrar um usuario', async () => {
        const user: userType = { name: "Teste", lastName: "TesteSobreNome", email: "Teste@teste.com", password: "654321B" }
        const newUser = await userServices.addUser(user);
        expect(newUser).toBe(true)
    });

    it('Deve fazer login do usuario', async () => {
        const user: userType = { name: "", lastName: "", email: "Teste@teste.com", password: "654321B" }
        const loginUser = await userServices.loginUser(user);
        expect(loginUser).not.toBeNull()
    })

    it('Deve deletar o usuario registrado', async () => {
        const user: userType = { name: "", lastName: "", email: "Teste@teste.com", password: "" }
        const deletUser = await User.destroy({ where: { email: user.email } });
        console.log(deletUser)
        expect(deletUser).toBeGreaterThan(0)
    })
});