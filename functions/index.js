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

exports.addToIndex = functions.firestore
  .document("folders/{folderID}")
  .onCreate((snapshot) => {
    const data = snapshot.data();
    const objectID = snapshot.id;
    const level = findTreeDepth(data);
    snapshot.ref.set({ level }, { merge: true });
    return foldersIndex.saveObject({
      ...newData,
      objectID,
    });
  });

exports.updateIndex = functions.firestore
  .document("folders/{folderID}")
  .onUpdate((change) => {
    const newData = change.after.data();
    const objectID = change.after.id;
    return foldersIndex.saveObject({
      ...newData,
      objectID,
    });
  });

exports.deleteFromIndex = functions.firestore
  .document("folders/{folderID}")
  .onDelete((snapshot) => {
    foldersIndex.deleteObject(snapshot.id);
  });

// exports an https function wich returns all the algolia folders when called
exports.getFolders = functions.https.onRequest((req, res) => {
  foldersIndex
    .search("")
    .then(({ hits }) => {
      res.send(hits);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
});

exports.deleteSubFolders = functions.https.onRequest(async (req, res) => {
  const id = req.query.id;
  // Check if id is a string and if its lentgh is equal to 20
  if (typeof id === "string" && id.length === 20) {
    const query = await foldersIndex.search(id);

    if (query.hits.length > 0) {
      try {
        await query.hits.map((hit) => {
          admin.firestore().collection("folders").doc(hit.objectID).delete();
        });
        res.json({ message: "Folders deleted"});
      } catch {
        res
          .status(500)
          .send({ message: "Could not delete the folders and files"});
      }
    }
  } else {
    res.status(400).send("Invalid id");
  }
});
