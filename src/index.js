const {
    portal1, 
    portal3,
    portal4,
} = require('./routes');
const config = require('./config')
const template = require('./templateHtml')
const nodemail = require('nodemailer')
const getInfoBackups = require('./getInfoBackups');



(async function(){
    const infoBackupFull = [];
    const infoPortal1 = getInfoBackups(portal1,'SU');   
    const infoPortal3 = getInfoBackups(portal3,'NX'); 
    const infoPortal4 = getInfoBackups(portal4,'NXSU'); 
    infoBackupFull.push(...infoPortal1, ...infoPortal3, ...infoPortal4)

    let transporter = nodemail.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: config.mail.user, // generated ethereal user
          pass: config.mail.pass, // generated ethereal password
        },
      });

     // send mail with defined transport object
     let info = await transporter.sendMail({
        from: config.mail.from, // sender address
        to: config.mail.to, // list of receivers
        subject: config.mail.subject, // Subject line    
        html: template(infoBackupFull), // html body
      });
})()
