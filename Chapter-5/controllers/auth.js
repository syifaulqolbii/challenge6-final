const {user_game} = require('../models');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const {
  JWT_SIGNATURE_KEY
}= process.env

module.exports = {
  register: async (req, res, next)=> {
    try {
      const {username, password} = req.body;

      const existUser = await user_game.findOne({where: {username: username}});
      if(existUser){
        return res.status(400).json({
          status: false,
          message: 'username already used!'
        })
      }

      const encryptedPassword = await bcrypt.hash(password, 10)

      const user = await user_game.create({
        username,
        password: encryptedPassword
      });

      return res.status(201).json({
        status: true,
        message: 'success',
        data: {
          id: user.id,
          username: user.username
        }
      })

    } catch (err) {
      next(err);
    }
  },

  login: async (req, res, next)=>{
    try {
      const {id, username, password} = req.body;

      const existUser = await user_game.findOne({where: {username: username}});
      if(!existUser){
        return res.status(400).json({
          status: false,
          message: 'email or password not match!'
        })
      }

      const correct = await bcrypt.compare(password, existUser.password)
      if(!correct){
        return res.status(400).json({
          status: false,
          message: 'email or password not match!'
        })
      }

      // generate

      payload = {
        id: id,
        username:username,
      }

      const token = jwt.sign(payload, JWT_SIGNATURE_KEY)

      return res.status(201).json({
        status: true,
        message: 'success',
        data: {
          username: username,
          id:id,
          token: token
        }
      })
      
    } catch (err) {
      next(err)
    }
  },

  whoami : (req, res, next)=> {

    const user = req.user
    try {
      return res.status(201).json({
        status: true,
        message: 'success',
        data: user
      })

    } catch (err) {
      next(err)
    }
  },

  changePassword: async (req, res, next) => {
    try {
        const { oldPassword, newPassword, confirmNewPassword } = req.body;
        
        if (newPassword !== confirmNewPassword) {
            return res.status(422).json({
                status: false,
                message: 'new password and confirm new password doesnt match!'
            });
        }
        const user = await user_game.findOne({ where: { username: req.user.username } });
        if (!user) return res.status(404).json({ success: false, message: 'User not found!' });
        
        const correct = await bcrypt.compare(oldPassword, user.password);
        if (!correct) {
            return res.status(400).json({
                status: false,
                message: 'old password does not match!'
            });
        }

        const encryptedPassword = await bcrypt.hash(newPassword, 10);
        const updatedUser = await user_game.update({
            password: encryptedPassword
        }, {
            where: {
                id: user.id
            }
        });

        return res.status(200).json({
            status: false,
            message: 'success',
            data: updatedUser
        });

    } catch (err) {
        next(err);
    }
  },
  deleteData : async (req, res, next)=>{
    try {
      const deleted = await user_game.destroy({
        where:{
          username : req.user.username
        }
      })

      return res.status(200).json({
        status: true,
        message: 'success',
        data: deleted
    });
      


    } catch (err) {
      next(err)
    }
  } 

}