import UsersModel from '../models/user';
import { Request, Response } from 'express';

export default class LoginController {
  async post(req: Request, res: Response) {
    try {
      const user = await UsersModel.create(req.body);
      return res.status(200).json(user); 

    } catch (error) {
      return res.status(403).json(error);  
    }  
  }
    
  async get(req: Request, res: Response) {
    try {
      const user = await UsersModel.find();
      return res.status(200).json(user);

    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async put(req: Request, res: Response) {
    try {
      const response = await UsersModel.updateOne();
      return res.status(201).json(response);

    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async patch(req: Request, res: Response) {
    try {
      const response = await UsersModel.updateOne();
      return res.status(201).json(response);

    } catch (error) {
      return res.status(500).json(error);
    }  
  }

  async delete(req: Request, res: Response) {
    try {
      const response = await UsersModel.remove();
      return res.status(201).json({ message: "OK"});
      
    } catch (error) {
      return res.status(500).json(error);
    }   
  }
}


