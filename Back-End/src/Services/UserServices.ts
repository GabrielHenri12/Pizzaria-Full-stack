import {UserRepository} from "../Repository/UserRepository";
import { userType } from "../Types/UserTypes";
import bcrypt from "bcrypt"
import { generateToken } from "../Helpers/GenerateToken";

export const addUser = async (userData: userType, _userRepository: UserRepository): Promise<boolean> => {
    const NewUser = userData

    const testUser = await _userRepository.findUserByEmail(NewUser.email);
    if (testUser != null) {
        throw new Error('Email already exists');
    }

    NewUser.password = bcrypt.hashSync(NewUser.password, 10)
    try {
        await _userRepository.addUser(NewUser);
        return true
    } catch {
        throw new Error("Algo deu errado na ação")
    }
}

export const loginUser = async (userData: userType, _userRepository: UserRepository): Promise<string> => {
    const user = await _userRepository.findUserByEmail(userData.email)

    if(!user) throw new Error("Email não registrado")
    if(!bcrypt.compareSync(userData.password, user.password)) throw new Error("Senha incorreta");
    
    return generateToken(user.email);
}