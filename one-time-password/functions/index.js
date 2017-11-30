const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./createUser');
const serviceAccount = require('./serviceAccount.json');
const requestOneTimePw = require('./requestoneTimePw');
const verifyOneTimePassword = require('./verifyOneTimePassword');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-password-d12ad.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
exports.requestOneTimePw = functions.https.onRequest(requestOneTimePw);
exports.verifyOneTimePassword = functions.https.onRequest(verifyOneTimePassword);
