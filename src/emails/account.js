const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
    to: email,
    from: 'devonroepke@hotmail.com',
    subject: 'Welcome to the Task-Manager app!',
    text: `Welcome to the app, ${name}.`
})
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'devonroepke@hotmail.com',
        subject: 'Sorry to see you go.',
        text: `${name} we are sad that you are leaving. Was there anything we could have done to keep you with us?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}