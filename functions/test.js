const admin = require('firebase-admin');

const serviceAccount = require('../call-for-spakers-a1d7e5b4fe4b.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

exports.handler = function(event, context, callback) {
  var docRef = db.collection('users').doc('alovelace');

  var setAda = docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  });

  callback(null, {
    statusCode: 200,
    body: 'hello'
  });
};