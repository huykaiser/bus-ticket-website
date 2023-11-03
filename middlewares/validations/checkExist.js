const { Station } = require('../../models/station');

const checkExist = (Model) => {
    return async (req, res, next) => {
        const { id } = req.params;
        // check  xem station co ton tai
    
        const station = await Model.findOne({
            where: { id: id },
        });
    
        if(station){
            next();
        }else{
            res.status(404).send(`Not Found Object with id ${id}`);
        }
    };
};

module.exports = {
    checkExist
};
