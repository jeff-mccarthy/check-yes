export const createChecklist = (list) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();

    firestore.collection('checklists').add({
      ...list,
      completed: false,
      favorite: false,
      authorFirstName: 'Jeff',
      authorLastName: 'McCarthy',
      authorId: 12345,
      created: new Date(),
      todos: []
    }).then(() => {
      dispatch({
        type: 'CREATE_CHECKLIST',
        list
      })
    }).catch((err) => {
      dispatch({ type: 'CREATE_CHECKLIST_ERROR', error: err })
    })
  }
}

export const updateChecklist = (list) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    
    firestore.collection('checklists').doc(list.id).set({
      ...list
    }).then(() => {
      dispatch({
        type: 'UPDATE_CHECKLIST',
        list
      })
    })
  };
}

export const toggleChecklist = (list) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection('checklists').doc(list.id).set({
      ...list,
      completed: !list.completed
    }).then(() => {
      dispatch({
        type: 'TOGGLE_CHECKLIST_COMPLETE',
        list
      })
    })
  }
}

export const toggleFavorite = (list) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection('checklists').doc(list.id).set({
      ...list,
      favorite: !list.favorite
    }).then(() => {
      dispatch({
        type: 'TOGGLE_CHECKLIST_FAVORITE',
        list
      })
    })
  }
}

// without redux-thunk
// export const createChecklist = (list) => {
//   return {
//     type: 'CREATE_CHECKLIST',
//     list
//   }
// }