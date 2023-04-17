import {UserRepository} from "../Repository/UserRepository";
import { userType } from "../Types/UserTypes";
import bcrypt from "bcrypt"
import { generateToken } from "../Helpers/GenerateToken";

export class UserServices {
    private readonly _userRepository: UserRepository;
    constructor(userRepository: UserRepository){
        this._userRepository = userRepository
    }

    addUser = async (userData: userType): Promise<boolean> => {
        const NewUser = userData
    
        const testUser = await this._userRepository.findUserByEmail(NewUser.email);
        if (testUser != null) {
            throw new Error('Email already exists');
        }
    
        NewUser.password = bcrypt.hashSync(NewUser.password, 10)
        try {
            await this._userRepository.addUser(NewUser);
            return true
        } catch {
            throw new Error("Algo deu errado na ação")
        }
    }

    loginUser = async (userData: userType): Promise<string> => {
        const user = await this._userRepository.findUserByEmail(userData.email)
    
        if(!user) throw new Error("Email não registrado")
        if(!bcrypt.compareSync(userData.password, user.password)) throw new Error("Senha incorreta");
        
        return generateToken(user.email);
    }
}

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