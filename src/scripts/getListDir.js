const fS = require('fs');
const getListDir = (route) =>{

    const listDirs = fS.readdirSync(route)
    return  listDirs;
}

module.exports = getListDir