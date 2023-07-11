const controllTypes = require("../../controller/typeController/controllTypes");

const getTypes = async(req, res)=>{
    try {
        const types = await controllTypes();
        return res.status(200).json(types);
    } catch (error) {
        return res.status(500).json({error: "server error"});
    }
}

module.exports = getTypes;