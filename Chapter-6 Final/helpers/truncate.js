const { User } = require('../models');
const {Biodata, History} = require('../models');

module.exports = {
    user: async () => {
        await User.destroy({ truncate: true, restartIdentity: true });
    },
    biodata: async () => {
        await Biodata.destroy({ truncate: true, restartIdentity: true });
    },
    history: async () => {
        await History.destroy({ truncate: true, restartIdentity: true });
    },
};
