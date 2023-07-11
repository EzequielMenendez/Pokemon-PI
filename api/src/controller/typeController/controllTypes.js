const axios = require("axios");
const { Type } = require("../../db");

const controllTypes = async()=>{
    //Busco los types en la Api
    const result1 = await Type.findAll();
    if(result1.length)return result1;
    const { data } = await axios.get("https://pokeapi.co/api/v2/type");
    //Guardo los types en la Api
    const promises = data.results.map(async(type)=>{
        await Type.create({name: type.name});
    });
    await Promise.all(promises);
    const result2 = await Type.findAll();
    return result2;
};

module.exports = controllTypes;