import UserModel from '../../app/models/user';
import LoginInterface from '../repositories/loginRepositories';

export default class LoginContracts implements LoginInterface {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    
    async getLogin(firstname: string, lastname: string, email: string, password: string) {
      const data =  { firstname, lastname, email, password }
      const response = await UserModel.find(data);
      return response;
    }

    async putLogin(firstname: string, lastname: string, email: string, password: string) {
      const data =  { firstname, lastname, email, password }
      const response = await UserModel.updateOne(data);
      return response;
    }

    async postLogin(firstname: string, lastname: string, email: string, password: string) {
      const data =  { firstname, lastname, email, password }
      const response = await UserModel.create(data);
      return response;
    }

    async deleteLogin(firstname: string, lastname: string, email: string, password: string) {
      const data =  { firstname, lastname, email, password }
      const response = await UserModel.remove(data);
      return response;
    }
}