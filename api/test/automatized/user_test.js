import { MongoClient } from 'mongodb';

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect("mongodb://localhost:27017/node-test", {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex : true
    });
    db = connection.db("mongodb://localhost:27017/node-test");
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  // post
  it('should insert a doc into collection', async () => {
    const users = db.collection('/users');

    const mockUser = { email:"example@.com", firstName: 'John', lastName: "Lima", password: "agablaga" };
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: 'some-user-id'});
    expect(insertedUser).toEqual(mockUser);
  });

  //get
  it('Esse tem que buscar o usuário', async () => {
    const users = db.collection('/users');

    const mockUser = { email:"example@.com", firstName: 'John', lastName: "Lima", password: "agablaga" };
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: 'some-user-id'});
    expect(insertedUser).toEqual(mockUser);
  });

  //patch


  // put


  //delete
});