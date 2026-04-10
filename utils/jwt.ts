import jwt from 'jsonwebtoken';
import type { Secret, SignOptions } from 'jsonwebtoken';
import { Role } from '../models/User.ts';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

const JWT_EXPIRES_IN: SignOptions["expiresIn"] =
  (process.env.JWT_EXPIRES_IN as SignOptions["expiresIn"]) || "1d";

export interface JwtPayload {
    userId: number;
    name: string;
    email: string;
    role: Role;
}

export const generateToken = (payload: JwtPayload): string => {
  const options: SignOptions = {
    expiresIn: JWT_EXPIRES_IN,
  };

  return jwt.sign(payload, JWT_SECRET, options);
};

export function verifyToken(token: string): JwtPayload | null {
    try {
        if (!JWT_SECRET) {
            throw new Error('JWT_SECRET must be defined in environment variables');
        }
        return jwt.verify(token, JWT_SECRET) as JwtPayload;
    } catch (error) {
        console.log('Invalid token:', error);
        return null;
    }
}