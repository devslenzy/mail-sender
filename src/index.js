const { ad_system, subject } = require("../config.json");
const { createTransport } = require("nodemailer");
require("dotenv").config();

const transporter = createTransport({
    service: "Gmail",
    auth: {
        user: process.env.MAIL,
        pass: process.env.PASS
    }
});

const mailData = [
    {
        email: "exampleMail@example.com"
    },
    {
        email: "exampleMail@icloud.com"
    },
    {
        email: "exampleMail@gmail.com"
    },
    // ...
];

const mailOptions = {
    from: process.env.MAIL,
    to: mailData.map((data) => data.email).join(", "),
    subject,
    html: `
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
            <style>
                body {
                    font-family: 'Poppins', sans-serif;
                    background-color: #f9f9f9;
                    color: #FFFFFF;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    background-color: #fff;
                    border: 1px solid #e0e0e0;
                }
                .header {
                    color: #333;
                    font-size: 24px;
                    margin-bottom: 10px;
                    text-align: center;
                    border-bottom: 1px solid #e0e0e0;
                    padding-bottom: 10px;
                }
                .content {
                    font-size: 16px;
                    color: #555;
                    line-height: 1.6;
                    margin-bottom: 20px;
                    text-align: justify;
                }
                .btn {
                    font-size: 16px;
                    text-decoration: none;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">${ad_system[0]}</div>
                <div class="content">${ad_system[1]}</div>
                <a class="btn" href="${ad_system[2]}" class="btn">Go to the WebSite</a>
            </div>
        </body>
    `
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
});