const {Biodata} = require('../models')

module.exports = {
    show: async (req, res, next) => {
        try {
            const data = await Biodata.findAll()

            return res.status(200).json({
                status: true,
                message: 'success get all data!',
                data: data
            })
        } catch (err) {
            next(err)
        }
    },
    input: async (req, res, next) => {
        try {
            const { name, email } = req.body

            const dataExist = await Biodata.findOne({ where: { email: email } })
            if (dataExist) {
                return res.status(409).json({
                    status: false,
                    message: "data already exist!",
                    data: null
                })
            }

            const inputData = await Biodata.create({ name, email })

            return res.status(200).json({
                status: true,
                message: "create data success!",
                data: { name, email }
            })
        } catch (err) {
            next(err)
        }
    },
    delete: async (req, res, next) => {
        try {
            const { email } = req.body

            const data = await Biodata.findOne({ where: { email: email } })

            if (!data) {
                return res.status(404).json({
                    status: false,
                    message: "data not found!",
                    data: null
                })
            }

            const terhapus = await Biodata.destroy({ where: { email: email } })

            return res.status(200).json({
                status: true,
                message: "success delete data!",
                data: { name: data.name, email: data.email }
            })
        } catch (err) {
            next(err)
        }
    }


}