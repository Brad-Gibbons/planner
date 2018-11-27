

export const createProject = (project) => {
    return (dispatch, getState, { getFirestore }) => {
    // Async call to db
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Brad',
            authorLastName: 'Gibbons',
            authorID: 123,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project})
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })
    }
}