const {user_biodata} = require('../models');

module.exports = {
  show: async (req, res, next)=>{
    try {
      const user = await user_biodata.findAll();
        return res.status(200).json({
          status: true,
          message: 'here we go',
          data : user
        })
    } catch (err) {
      next(err)
    }
  },

  inputBio: async (req, res, next)=>{
    try {
      const {nama, email} = req.body;
      const createUser = await user_biodata.create({
        nama,
        email
      });

      return res.status(201).json({
        status: true,
        message: 'success',
        data: {
          id: createUser.id,
          nama: createUser.nama,
          email: createUser.email
        }
      })
    } catch (err) {
      next(err)
    }
  },

  updateBio: async(req, res, next)=>{
    try{
      const {nama, email} = req.body;
      const {userId} = req.params;
        
        const user = await user_biodata.findOne({ where: { nama: nama } });
        if (!user) return res.status(404).json({ success: false, message: 'User not found!' });

        const updatedBio = await user_game.update({
            nama,
            email
        }, {
            where: {
                id: userId
            }
        });

        return res.status(200).json({
            status: false,
            message: 'success',
            data: updatedBio
        });

    }catch(err){
      next(err)
    }
  },
  deleteData : async (req, res, next)=>{
    try {
      const {nama} = req.body;
      const {id} = req.params;
      const deleted = await user_biodata.destroy({
        where:{
          id : id
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