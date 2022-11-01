const functions = require("firebase-functions");
const algoliasearch = require("algoliasearch");

const APP_ID = functions.config().algolia.app;
const ADMIN_KEY = functions.config().algolia.key;

const client = algoliasearch(APP_ID, ADMIN_KEY);
const foldersIndex = client.initIndex("folders");

/// Cloud Functions

exports.addToIndex = functions.firestore
  .document("folders/{folderID}")
  .onCreate((snapshot) => {
    const data = snapshot.data();
    const objectID = snapshot.id;
    return foldersIndex.saveObject({ ...data, objectID });
  });

exports.updateIndex = functions.firestore
  .document("folders/{folderID}")
  .onUpdate((change) => {
    const newData = change.after.data();
    const objectID = change.after.id;
    return foldersIndex.saveObject({ ...newData, objectID });
  });

exports.deleteFromIndex = functions.firestore
  .document("folders/{folderID}")
  .onDelete((snapshot) => foldersIndex.deleteObject(snapshot.id));
