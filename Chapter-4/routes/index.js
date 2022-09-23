const express = require('express')
const router = express.Router()
const controller = require('../controllers');
const { mustLogin } = require('../helpers/middleware');
const middleware = require('../helpers/middleware')

router.post('/auth/register', controller.auth.register);
router.post('/auth/login', controller.auth.login);
router.get('/auth/whoami', middleware.mustLogin, controller.auth.whoami);
router.post('/auth/changepassword', middleware.mustLogin, controller.auth.changePassword);
router.delete('/auth/deleted', middleware.mustLogin, controller.auth.deleteData);

router.get('/bio/show', middleware.mustLogin, controller.biodata.show);
router.post('/bio/input', middleware.mustLogin, controller.biodata.inputBio);
router.post('/bio/update', middleware.mustLogin, controller.biodata.updateBio);
router.delete('/bio/delete',middleware.mustLogin, controller.biodata.deleteData);

router.get('/his/show', middleware.mustLogin, controller.history.show);
router.post('/his/input', middleware.mustLogin, controller.history.inputHis);
router.post('/his/update', middleware.mustLogin, controller.history.updateHis);
router.delete('/his/delete',middleware.mustLogin, controller.history.deleteData);

module.exports = router