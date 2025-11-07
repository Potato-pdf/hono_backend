import jwt from 'jsonwebtoken';

const JWT_SECRET = Bun.env.JWT_SECRET;

export const createToken = (user: any) => {
    const payload = {
        user,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 10,
    };
    return jwt.sign(payload, JWT_SECRET);
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, JWT_SECRET);
};