const Joi = require('joi');
const Titlename = require('../models/Titlename.model.js');

const titlenameSchema = Joi.object({

  bookid: Joi.string().required(),
  titlename: Joi.string().required(),
  types: Joi.string().required(),
  discription: Joi.string().required(),
})


module.exports = {
  insert,
  get,
  getAll,
  search,
  del,
  update,
}

async function insert(titlename) {
  titlename = await Joi.validate(titlename, titlenameSchema, { abortEarly: false });
  return await new Titlename(titlename).save();
}


/**
 * อ่านเพิ่มเติม https://mongoosejs.com/docs/api.html
 */
async function get(bookid) {
  console.log("get controler")
  return await Titlename.find({bookid: bookid});
}

async function getAll() {
  return await Titlename.find();
}

async function search(key, value) {
  let query = {};
  query[key] = value;
  return await Titlename.find(query);
}

async function del(bookid) {
  return await Titlename.deleteMany({bookid: bookid});
}

async function update(data) {
  return await Titlename.updateOne({bookid: data.bookid},{$set: data} );
}

