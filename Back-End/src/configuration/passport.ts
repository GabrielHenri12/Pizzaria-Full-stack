import { Request, Response, NextFunction } from "express";
import passport from "passport";
import { Strategy as JWTstrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";
import JWT from "jsonwebtoken";
import {User} from "../models/user"

dotenv.config()

const notAuthorized: object = {status: 401, msg: "Usuario não autorizado!"};

const options = {
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_KEY as string
}

passport.use(new JWTstrategy(options,async (payload, done)=>{
    let user = await User.findByPk(payload.id);
    if(user){
        return done(null, user)
    }else{
        return done(notAuthorized, false)
    }
}));

export const generateToken = (data: object)=>{
    return JWT.sign(data, process.env.JWT_SECRET_KEY as string)
};

export const privateRouts = (req:Request, res:Response, next:NextFunction)=>{
    passport.authenticate('jwt', (err, user)=>{
        if(user){
            req.user = user.id
            next()
        }else{
            next(notAuthorized);
        }
    })(req, res, next);
}

export default passport;