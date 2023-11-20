const nodemailer = require("nodemailer");
 
 const { UKR_NET_EMAIL  } = process.env;
 const { PASSWORD } = process.env;
 const nodemailerConfig = {
    host: "smtp.ukr.net", 
    port: 465,
    secure: true,
    auth: {
user: "UKR_NET_EMAIL",
pass: "PASSWORD",
    }
};
const transport = nodemailer.createTransport(nodemailerConfig);
const sendEmail = async (data) => {
const email = {...data, from: UKR_NET_EMAIL};
 return transport.sendMail(email);

}



module.exports = sendEmail;