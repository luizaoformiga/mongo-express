import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const config = {
  uri: 'mongodb://localhost:27017/node-express',
  options: {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex : true
  },
}

mongoose.connection.on('open', () => {
  console.log('Successfully connected to database.');
})

mongoose.connection.on('error', () => {
  throw new Error('Could not connect to MongoDB.');
})

//http://localhost:7769/sign
// eslint-disable-next-line import/no-anonymous-default-export
export default { connect: () => mongoose.connect(config.uri, config.options) } 
