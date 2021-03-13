import jwt from 'jsonwebtoken';

const secret = "AsoijdALKJD798sadnUFS&DWJKÒPSDKPdjfdfij789";

export const sign = payload => jwt.sign(payload, secret, { expiresIn: 86400 });
export const verifyToken = token => jwt.verify(token, secret);