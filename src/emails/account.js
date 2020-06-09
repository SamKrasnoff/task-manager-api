const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sam.krasnoff@gmail.com',
        subject: 'Thank you for joining!',
        text: `Welcome to the app, ${name}. Let me know how it works`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sam.krasnoff@gmail.com',
        subject: 'Sorry to see you go!',
        text: `We're sorry to see you go, ${name}. Please tell us what we could've done better!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}