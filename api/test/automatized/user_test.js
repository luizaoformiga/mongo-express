import { app } from '../../index';
import mongoose from 'mongoose';
import UsersModel from '../../models/user';

const databaseName = 'test';

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/${databaseName}`;
  await mongoose.connect(url, { useNewUrlParser: true });
   
})


   