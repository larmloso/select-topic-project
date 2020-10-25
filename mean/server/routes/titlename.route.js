const express = require('express');
const asyncHandler = require('express-async-handler');
const titlenameCtrl = require('../controllers/Titlename.controller');
const userCtrl = require('../controllers/user.controller');

const router = express.Router();
module.exports = router;

//router.use(passport.authenticate('jwt', { session: false }))

router.route('/').post(asyncHandler(insert));
router.route('/update').post(asyncHandler(update));
router.route('/get/:bookid').get(asyncHandler(get));
router.route('/all').get(asyncHandler(getAll));
router.route('/search').get(asyncHandler(search));
router.route('/del/:bookid').get(asyncHandler(del));

//user controler
router.route('/getalluser').get(asyncHandler(getall));
router.route('/deluser').post(asyncHandler(deluser));


async function insert(req, res) {
  console.log("this is insert title name")
  let student = await titlenameCtrl.insert(req.body);
  res.json(student);
}

async function get(req, res) {
  console.log("get_id")
  let all_students = await titlenameCtrl.get(req.params['bookid']);
  res.json(all_students);
}

async function getAll(req, res) {

  let all_students = await titlenameCtrl.getAll();
  res.json(all_students);
}

async function search(req, res) {
  let result = await titlenameCtrl.search(req.params['key'], req.params['value']);
  res.json(result);
}

async function del(req, res) {
  console.log("get_id")
  let result = await titlenameCtrl.del(req.params['bookid']);
  res.json(result);
}


async function update(req, res) {
  let result = await titlenameCtrl.update(req.body);
  res.json(result);
}



///user controler
async function getall(req, res) {
  let user = await userCtrl.getall();
  res.json(user);
}

async function deluser(req, res) {
  let user = await userCtrl.deluser(req.body);
  res.json(user);
}
