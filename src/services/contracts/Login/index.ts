import { UsersModel } from "@/app/models";
import { LoginInterface } from "@/services/repositories";

export default class LoginContracts implements LoginInterface {
  firstname: string;
  lastname: string;
  email: string;
  password: string;

  async getLogin(
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ) {
    const data = { firstname, lastname, email, password };
    const response = await UsersModel.find(data);
    return response;
  }

  async putLogin(
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ) {
    const data = { firstname, lastname, email, password };
    const response = await UsersModel.updateOne(data);
    return response;
  }

  async postLogin(
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ) {
    const data = { firstname, lastname, email, password };
    const response = await UsersModel.create(data);
    return response;
  }

  async deleteLogin(
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ) {
    const data = { firstname, lastname, email, password };
    const response = await UsersModel.remove(data);
    return response;
  }
}
