var express = require('express');
var router = express.Router();
var auth = require('../controllers/auth');
var biodata = require('../controllers/biodata');
var history = require('../controllers/history');
var mid = require('../helpers/middleware');

router.post('/auth/register', auth.register);
router.post('/auth/login', auth.login);
router.post('/auth/whoami', mid.mustLogin, auth.whoami);

router.post('/biodata/show', biodata.show);
router.post('/biodata/input', biodata.input);
router.post('/biodata/delete', biodata.delete);

router.post('/history/show', history.show);
router.post('/history/input', history.input);
router.post('/history/delete', history.delete);

module.exports = router;
