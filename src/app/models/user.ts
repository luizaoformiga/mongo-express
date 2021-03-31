import Mongoose from 'mongoose';

const schema = new Mongoose.Schema({
    firstName: {
        type: String,
        required: false,
        minlegth: 3,
        maxlength: 99 
    },
    lastName: {
      type: String,
      required: false,
      minlength: 3,
      maxlength: 99 
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true
    }, 
    password: {
        type: String,
        required: [true, 'Password is required'],
        select: false
    },     
},   {
    timestamps: { createdAt: true, updatedAt: true },
    toJSON: { virtuals: true, getters: true,
        transform(document: any, returns: any) {
            returns.id = returns._id
            delete returns._id
        }
    },
    toObject: { virtuals: true, getters: true },
    versionKey: false 
})

const UsersModel = Mongoose.model('Users', schema);

export default UsersModel;