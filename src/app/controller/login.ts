import { Request, Response } from 'express';
import LoginContracts from '../../services/contracts/loginContracts';

export default class LoginController extends LoginContracts {
  async post(req: Request, res: Response) {
    try {
      const [firstname, lastname, email, password] = req.body;
      const user = await this.getLogin(firstname, lastname, email, password);

      if(!user) return res.status(400).json({ message: "NOT FOUND" });
      
      return res.status(200).json(user); 

    } catch (error) {
      return res.status(403).json(error);  
    }  
  }
    
  async get(req: Request, res: Response) {
    try {
      const [firstname, lastname, email, password] = req.body;
      const user = await this.postLogin(firstname, lastname, email, password);
      
      if(!user) return res.status(404).json({ message: "NOT FOUND" });

      return res.status(200).json(user);

    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async put(req: Request, res: Response) {
    try {
      const [firstname, lastname, email, password] = req.body;
      const user = await this.putLogin(firstname, lastname, email, password);
      
      if(!user) return res.status(401).json({ message: "NOT FOUND" });

      return res.status(201).json(user);

    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const [firstname, lastname, email, password] = req.body;
      const user = await this.deleteLogin(firstname, lastname, email, password);
      
      if(!user) return res.status(400).json({ message: "NOT FOUND" });

      return res.status(201).json(user);
      
    } catch (error) {
      return res.status(500).json(error);
    }   
  }
}


