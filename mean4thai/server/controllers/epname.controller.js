const Joi = require('joi');
const Epname = require('../models/epname.model');

const epnameSchema = Joi.object({

  bookid: Joi.string().required(),
  epnumber: Joi.string().required(),
  epname: Joi.string().required(),
  epdiscription: Joi.string().required(),

})


module.exports = {
  insert,
  get,
  getAll,
  search,
  del,
  delall,
  getepid,
  update,
}

async function insert(epname) {
  epname = await Joi.validate(epname, epnameSchema, { abortEarly: false });
  return await new Epname(epname).save();
}

/**
 * อ่านเพิ่มเติม https://mongoosejs.com/docs/api.html
 */
async function get(bookid) {
  console.log("get controler")
  return await Epname.find({bookid: bookid});
}

async function getAll() {
  return await Epname.find();
}

async function search(key, value) {
  let query = {};
  query[key] = value;
  return await Epname.find(query);
}


async function del(id) {
  return await Epname.deleteMany({_id: id});
}


async function delall(bookid) {
  return await Epname.deleteMany({bookid: bookid});
}

async function getepid(_id) {
  console.log("get controler")
  return await Epname.find({_id: _id});
}

async function update(data) {

  console.log("Hello ",data)
  return await Epname.updateOne({_id: data._id},{$set: data} );
}
