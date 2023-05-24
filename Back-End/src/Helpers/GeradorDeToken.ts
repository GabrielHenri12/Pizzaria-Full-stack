import JWT from "jsonwebtoken";

export const GerarToken = (data: string) => {
    const chave = process.env.JWT_SECRET_KEY as string || "23123421"
    return JWT.sign(data, chave)
};