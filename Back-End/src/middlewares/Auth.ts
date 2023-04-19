import { Request, Response, NextFunction } from "express";
import passport from "passport";
import { Strategy as JWTstrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";
import User from "../database/models/usuario"

dotenv.config()

const notAuthorized: object = { status: 401, mensagem: "Usuario não autorizado!" };

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_KEY as string
}

passport.use(new JWTstrategy(options, async (payload, done) => {
    console.log(payload)
    let user = await User.findOne({ where: { email: payload } });
    if (user) {
        return done(null, user)
    } else {
        return done(notAuthorized, false)
    }
}));

export const privateRouts = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('jwt', (err, user) => {
        if (user) {
            req.user = user.id
            return next()
        } else {
            return res.json(notAuthorized);
        }
    })(req, res, next);
}

export default passport;