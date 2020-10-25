const mongoose = require('mongoose');

/**
 * อ่านเพิ่มเติม https://mongoosejs.com/docs/guide.html
 */
const TitlenameSchema = new mongoose.Schema(
  {
    bookid: { type: String, required: true },
    titlename: { type: String, required: true },
    types: { type: String, required: true },
    discription: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false
  }
);


module.exports = mongoose.model('Titlename', TitlenameSchema);
