import Mongoose from 'mongoose';

const schema = new Mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'firstName is required'],
        minlegth: 3,
        maxlength: 99 
    },
    lastName: {
      type: String,
      required: [true, 'lastName is required'],
      minlength: 3,
      maxlength: 99 
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    }, 
    password: {
        type: String,
        required: [true, 'Password is required'],
        unique: true
    },     
},   {
    timestamps: { createdAt: true, updatedAt: true },
    toJSON: { 
        virtuals: true,
        transform(document, returns) {
            returns.id = returns._id
            delete returns._id
        }
    },
    versionKey: false, 
})

const UsersModel = Mongoose.model('users', schema);

export default UsersModel;