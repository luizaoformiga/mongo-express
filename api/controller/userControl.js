import UserModel from '../models/user';

export default class UserControl {
  async get(request, response) {
    try {
      const userAliens = await UserModel.find();
      return response.status(200).json(userAliens);

    } catch (error) {
      response.status(401).json("ERROR: " + error);  
    }
  
  }
  
  async getId(request, response) {
    try {
      const userAliens = await UserModel.findById(request.params.id);
      return response.status(200).json(userAliens);
  
    } catch (error) {
      response.status(401).json("ERROR: " + error);
    }
  }
 
  
  async post(request, response) {
    const userAliens = new UserModel({
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email
    })
  
    try {
      const data = await userAliens.save();
      return response.status(201).json(data); 
    
    } catch (error) {
      response.status(401).json("ERROR: " + error);
    }
  }

  async put(request, response) {

  }

  async delete(request, response) {

  }

  async patch(request, response) {
    
  }
}



