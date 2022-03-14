const fS = require('fs');
const path = require('path');

const date =  new Date()
const month = date.getMonth() + 1
const today = `${date.getFullYear()}${month < 10 ? '0'+ month.toString() : month}${date.getDate() < 10 ? '0'+ date.getDate().toString() : date.getDate()}`

const getInfoFiles = (route, dirs, su) => {
    let files
    const infoBackupFull=[];
    for(const dir of dirs){
        const infoBackup = [];
        files  = fS.readdirSync(path.resolve(`${route}/${dir}`))
        for(const file of files){
            if(file.includes(today)){
                const infoFile = fS.statSync(path.resolve(`${route}/${dir}/${file}`))
                infoBackup.push({
                    name: `${file}`,
                    size: `${(infoFile.size / (1024 ** 3)).toFixed(2)}GB`,
                    date: `${date.toLocaleDateString()}`,
                    su:  `${su}`,
                    status: true
                });
            }
            
        }
        if(infoBackup.length < 1){
            infoBackup.push({
                name: `Fallo ${su} ${dir}`,
                size: `0.00GB`,
                date: `${date.toLocaleDateString()}`,
                su: `${su}`,
                status: false
            });
            infoBackupFull.push(...infoBackup);
        }else{

            infoBackupFull.push(...infoBackup);
        }
    }

   return infoBackupFull;
}
module.exports = getInfoFiles;