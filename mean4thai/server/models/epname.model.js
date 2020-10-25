const mongoose = require('mongoose');

/**
 * อ่านเพิ่มเติม https://mongoosejs.com/docs/guide.html
 */
const EpnameSchema = new mongoose.Schema(
  {
    bookid: { type: String, required: true },
    epnumber: { type: String, required: true },
    epname: { type: String, required: true },
    epdiscription: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false
  }
);


module.exports = mongoose.model('Epname', EpnameSchema);
