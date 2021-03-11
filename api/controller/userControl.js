import UserModel from '../models/user';
import generateToken from '../services/auth';

export default class UserControl {
  async get(request, response) {
    try {
      const user = await UserModel.find();
      return response.status(200).json(user);

    } catch (error) {
      response.status(401).json("ERROR: " + error);  
    }
  }
  
  async getId(request, response) {
    try {
      const user = await UserModel.findById(request.decoded);
      return response.status(200).json(user);
  
    } catch (error) {
      response.status(401).json("ERROR: " + error);
    }
  }
 
  async post(request, response) {
    const user = new UserModel({
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: request.body.password
    })

    try {
      const token = await generateToken(user.save());
      return response.status(201).json(token); 
    
    } catch (error) {
      response.status(401).json("ERROR: " + error);
    }
  }

  async put(request, response) {
    try {
      const user = new UserModel({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        password: request.body.password
      })

      const userResponse = UserModel.updateOne(user, request.body);
      const token = await generateToken(userResponse);

      return response.status(201).json(token);    

    } catch (error) {
      return response.status(404).json(error, { message: "USER EXISTS"});
    }
  }

  async patch(request, response) {
    try {
      const { id } = request.params;
      const user = await UserModel.findOne(id, { finished: true });
      return response.satus(200).json(user);

    } catch (error) {
      return response.status(404).json(error, { message: 'NOT FOUND'}); 
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.decoded;
      const user = UserModel.deleteOne(id);
      const token = await generateToken(user);

      return response.status(200).json(token);

    } catch (error) {
      return response.status(404).json(error, { message: 'NOT FOUND'}); 
    }
  }
}


