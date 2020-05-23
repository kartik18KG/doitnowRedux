const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const gmailEmail = "marketingacad.help@gmail.com";
const gmailPassword = "abcd9876";
const admin = require("firebase-admin");
admin.initializeApp();

exports.notification = functions.firestore
  .document("Articles/{articleId}")
  .onCreate(async (snap, context) => {
    admin.auth().listUsers();
  });

exports.addAdminRole = functions.https.onCall((data, context) => {
  console.log("request recieved");
  console.log(data);
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
      });
    })
    .then(() => {
      console.log("it is working");
      return {
        message: "it is working",
      };
    })
    .catch((err) => {
      return err;
    });
});

exports.sendEmail = functions.https.onCall(async (data) => {
  console.log("trying to send email");

  const mailTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailEmail,
      pass: gmailPassword,
    },
  });
  const mailOptions = {
    from: '"DoItNow" <noreply@firebase.com>',
    to: data.email,
  };
  mailOptions.subject = data.subject;
  mailOptions.text = data.text;
  try {
    await mailTransport.sendMail(mailOptions);
    return { errorCode: 200 };
  } catch (error) {
    console.error("There was an error while sending the email", error);
    return { errorCode: 100 };
  }
});
