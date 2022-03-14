const path = require('path');
const getListDir = require('./scripts/getListDir')
const getInfoFiles = require('./scripts/getInfoFiles')

const connectionSSH = (routes, ServiceUnit) =>{
  let infoFiles= [];
  for(let su = 0; su < routes.length; su++ ){
    const dirs = getListDir(path.resolve(routes[su]))
    const files = getInfoFiles(routes[su], dirs, `${ServiceUnit}${su + 1}`)
    infoFiles.push(...files)   
  }

  return infoFiles;

}
module.exports = connectionSSH;
