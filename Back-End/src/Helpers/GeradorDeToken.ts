import JWT from "jsonwebtoken";

export const GerarToken = (data: string) => {
    return JWT.sign(data, process.env.JWT_SECRET_KEY as string)
};