export const createProject = (project) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        //Async Call TO DB
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid
        firestore.collection("projects").add({
            ...project,
            authorFirstname: profile.firstname,
            authorLastname: profile.lastname,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: "CREATE_PROJECT", project: project })
        }).catch(err => {
            dispatch({ type: "CREATE_PROJECT_ERR", err })
        })
    };
};