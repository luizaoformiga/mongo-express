import UsersModel from '../models/user';

export default class Login {
  async post(request, response) {
    try {
      const result = await UsersModel.create(request.body);
      const { password, ...user } = result.toObject();
      const responseUser = user;

      return response.status(200).json({ result, responseUser }); 

    } catch (error) {
      return response.status(403).json(error);  
    }  
  }
    
  async get(request, response) {
    try {
      const user = await UsersModel.find();
      return response.status(200).json(user);

    } catch (error) {
      return response.status(404).json(error);
    }
  }

  async getId(request, response) {
    try {
      const user = await UsersModel.findById();
      return response.status(200).json(user);
            
    } catch (error) {
      return response.status(404).json(error);       
    }
  }

}


