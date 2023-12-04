const nodemailer = require("nodemailer");
require("dotenv").config();
 /* const { UKR_NET_EMAIL  } = process.env; */
 const { PASSWORD } = process.env;
 const nodemailerConfig = {
    host: "smtp.ukr.net", 
    port: 465,
    secure: true,
    auth: {
user: "mdz45@ukr.net",
pass: PASSWORD,
    }
};
const transport = nodemailer.createTransport(nodemailerConfig);
const sendEmail = async (data) => {
    try {
        const email = { ...data, from: "mdz45@ukr.net" };   

 await transport.sendMail(email);
 return true;
 
} catch (error) {
 
}
};





module.exports = sendEmail;