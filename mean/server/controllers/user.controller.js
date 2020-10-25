const bcrypt = require('bcrypt');
const Joi = require('joi');
const User = require('../models/user.model');

const userSchema = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().email(),
  mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/),
  password: Joi.string().required(),
  repeatPassword: Joi.string().required().valid(Joi.ref('password')),
  roles: Joi.string().required()
})

module.exports = {
  insert,
  getall,
  deluser,
}

async function insert(user) {
  let newUser = {
    fullname: user.fullname,
    email: user.email,
    password: user.password,
    repeatPassword: user.repeatPassword,
    roles: "member"
  }
  user = await Joi.validate(newUser, userSchema, { abortEarly: false });
  user.hashedPassword = bcrypt.hashSync(user.password, 10);
  delete user.password;
  return await new User(user).save();
}

async function getall() {
  return await User.find();
}

async function deluser(data) {
  console.log('data', data)
  return await User.deleteMany({_id: data._id});
}
