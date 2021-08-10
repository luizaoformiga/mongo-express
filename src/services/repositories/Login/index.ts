type Login = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

export default interface LoginInterface extends Login {
  getLogin(
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ): Promise<Login> | any;

  putLogin(
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ): Promise<Login> | any;
  
  postLogin(
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ): Promise<Login> | any;
  
  deleteLogin(
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ): Promise<Login> | any;
}
