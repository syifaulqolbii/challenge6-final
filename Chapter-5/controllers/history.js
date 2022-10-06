const {user_history} = require('../models');

module.exports = {
  show: async (req, res, next)=>{
    try {
      const user = await user_history.findAll();
        return res.status(200).json({
          status: true,
          message: 'here we go',
          data : user
        })
    } catch (err) {
      next(err)
    }
  },

  inputHis: async (req, res, next)=>{
    try {
      const {lamabermain, ranking} = req.body;
      const createHis = await user_history.create({
        lamabermain,
        ranking
      });

      return res.status(201).json({
        status: true,
        message: 'success',
        data: {
          id: createHis.id,
          lama_bermain: createHis.lamabermain,
          ranking: createHis.ranking
        }
      })
    } catch (err) {
      next(err)
    }
  },

  updateHis: async(req, res, next)=>{
    try{
      const {lamabermain, ranking, id} = req.body;
      const {hisId} = req.params;
        
        const user = await user_history.findOne({ where: { id: id } });
        if (!user) return res.status(404).json({ success: false, message: 'not found!' });

        const updateHis = await user_history.update({
            lamabermain,
            ranking
        }, {
            where: {
                id: id
            }
        });

        return res.status(200).json({
            status: false,
            message: 'success',
            data: updateHis
        });

    }catch(err){
      next(err)
    }
  },
  deleteData : async (req, res, next)=>{
    try {
      const {nama} = req.body;
      const {id} = req.body;
      const deleted = await user_history.destroy({
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