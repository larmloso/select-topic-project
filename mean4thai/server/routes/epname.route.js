const express = require('express');
const asyncHandler = require('express-async-handler');
const epnameCtrl = require('../controllers/epname.controller');

const router = express.Router();
module.exports = router;

//router.use(passport.authenticate('jwt', { session: false }))

router.route('/').post(asyncHandler(insert));
router.route('/get/:bookid').get(asyncHandler(get));
//router.route('/get/:sid(\d+)').get(asyncHandler(get));
router.route('/all').get(asyncHandler(getAll));
router.route('/search').get(asyncHandler(search));
router.route('/del/:id').get(asyncHandler(del));
router.route('/delall/:bookid').get(asyncHandler(delall));

router.route('/getepid/:_id').get(asyncHandler(getepid));
router.route('/update').post(asyncHandler(update));

async function insert(req, res) {
  console.log("this is insert title name")
  let student = await epnameCtrl.insert(req.body);
  res.json(student);
}

async function get(req, res) {
  console.log("get_id")
  let all_students = await epnameCtrl.get(req.params['bookid']);
  res.json(all_students);
}

async function getAll(req, res) {

  let all_students = await epnameCtrl.getAll();
  res.json(all_students);
}

async function search(req, res) {
  let result = await epnameCtrl.search(req.params['key'], req.params['value']);
  res.json(result);
}

async function del(req, res) {
  let result = await epnameCtrl.del(req.params['id']);
  res.json(result);
}

async function delall(req, res) {
  let result = await epnameCtrl.delall(req.params['bookid']);
  res.json(result);
}

async function getepid(req, res) {
  let all_students = await epnameCtrl.getepid(req.params['_id']);
  res.json(all_students);
}

async function update(req, res) {
  let result = await epnameCtrl.update(req.body);
  res.json(result);
}
