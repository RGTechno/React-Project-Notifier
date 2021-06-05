const functions = require('firebase-functions');
const admin = require("firebase-admin")
admin.initializeApp(functions.config().firebase)

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const createNotification = (notification) => {
    return admin.firestore.CollectionReference("notifications")
        .add(notification)
        .then(doc => {
            console.log("Notification Added", doc)
        })
}

exports.projectCreated = functions.firestore.document("projects/{projectId}")
    .onCreate(doc => {
        const project = doc.data();
        const notification = {
            content: "Posted A New Project",
            user: `${project.authorFirstname} ${project.authorLastname}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification)
    });
