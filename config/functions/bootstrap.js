"use strict";

const admin = require("firebase-admin");
const serviceAccount = require("../../ascentit-8fded-firebase-adminsdk-txq7t-d0a1876e5e.json"); // add serviceAccountKey from firebase to root directory
module.exports = async () => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  strapi.firebase = admin;
};
