const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const mailsender = require('./config/email-config')

const app = express();

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async() => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    try {
        const response = await mailsender.sendMail({
            from: ServerConfig.GMAIL_EMAIL,
            to: 'jprachi28803@gmail.com',
            subject: 'Is the service working ? now as well',
            text: 'Yes it is working'
        });
        console.log(response);
    } catch(error) {
        console.log(error);
    }
});
