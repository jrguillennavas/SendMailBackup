require('dotenv').config()
const config = {
    mail:{
        user: process.env.USER,
        pass: process.env.PASS,
        from: '<jose.guillen@inxap.com>', //'<cuenta de correo que hace el envio>', // sender address
        to: 'ddiaz@inxap.com, jose.guillen@inxap.com', //"cuentas de correos destino separadas por(,) ", // list of receivers
        subject: "Estatus Diario Backup CCC Claro ✔", // S
    }
}

module.exports = config;