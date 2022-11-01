const functions = require("firebase-functions");
const algoliasearch = require("algoliasearch");
const admin = require("firebase-admin");

admin.initializeApp();

const APP_ID = functions.config().algolia.app;
const ADMIN_KEY = functions.config().algolia.key;

const client = algoliasearch(APP_ID, ADMIN_KEY);
const foldersIndex = client.initIndex("folders");

const findTreeDepth = (data) => {
  if (data.parent) {
    const parent = data.parent.split("_");
    if (parent.length > 1) {
      return parent.length;
    } else {
      return 1;
    }
  } else {
    return 0;
  }
};

/// Cloud Functions

const algoliaSave = (data, objectID, snapshot) => {
  const level = findTreeDepth(data);
  snapshot.ref.set({ level }, { merge: true });
  foldersIndex.saveObject({
    ...data,
    objectID,
  });
};

exports.addToIndex = functions.firestore
  .document("folders/{folderID}")
  .onCreate((snapshot) => {
    const data = snapshot.data();
    const objectID = snapshot.id;
    return algoliaSave(data, objectID, snapshot);
  });

exports.updateIndex = functions.firestore
  .document("folders/{folderID}")
  .onUpdate((change) => {
    const newData = change.after.data();
    const objectID = change.after.id;
    return algoliaSave(newData, objectID, snapshot);
  });

exports.deleteFromIndex = functions.firestore
  .document("folders/{folderID}")
  .onDelete((snapshot) => foldersIndex.deleteObject(snapshot.id));
