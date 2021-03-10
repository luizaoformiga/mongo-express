import UserModel from '../models/user';

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
      const user = await UserModel.findById(request.params.id);
      return response.status(200).json(user);
  
    } catch (error) {
      response.status(401).json("ERROR: " + error);
    }
  }
 
  async post(request, response) {
    const user = new UserModel({
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email
    })
  
    try {
      const data = await user.save();
      return response.status(201).json(data); 
    
    } catch (error) {
      response.status(401).json("ERROR: " + error);
    }
  }

  async put(request, response) {
    try {
      const { id } = request.params;
      const user = await UserModel.updateOne(id, request.body);
      return response.status(201).json(user);    

    } catch (error) {
      return response.status(404).json(error, { message: "NOT FOUND"});
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
      const { id } = request.params;
      const user = await UserModel.deleteOne(id);
      return response.status(200).json(user);

    } catch (error) {
      return response.status(404).json(error, { message: 'NOT FOUND'}); 
    }
  }
}


