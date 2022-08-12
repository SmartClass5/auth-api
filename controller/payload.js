const { User } = require('../models/user-permission');
const _ = require('lodash');

let PayloadController = {}
// jwt 가 유효한지 체크하는 미들웨어
PayloadController.form = async (req, res, next) => {

  return res.json(req.user);

}
module.exports = PayloadController;