import Mongoose from 'mongoose';

const validateEmail = email => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

const schema = new Mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        minlegth: 3,
        maxlength: 99 
    },
    lastName: {
      type: String,
      require: true,
      minlength: 3,
      maxlength: 99 
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        // validate: [validateEmail, 'Please fill a valid email address'],
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