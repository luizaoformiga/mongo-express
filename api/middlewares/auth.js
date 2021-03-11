import jwt from 'jsonwebtoken';
import config from '../config/config';

async function verifyToken(request, response, next) {
  const token = request.headers.authorization && request.headers.authorization.split(" ")[0] === 'Bearer'
    ? request.headers.authorization.split(" ")[1]
    : (request.body.token || request.query.token || request.headers['x-access-token'])

    if (!token) {
      return next();
    } 

  try {
    const decodedToken = jwt.verify(token, config.publicKey, config.authOptions);
    request.decoded = decodedToken;
    next();

  } catch (error) {
    response.status(401).send({ error: 'Token não informado ou inválido!'});
  }
}

  const protectRoute = (request, response, next) => {
    if(request.decoded) {
      return next();
    }
    
    response.status(401).send({ error: 'NOT AUTORIZED!' });
  }

export { verifyToken, protectRoute }