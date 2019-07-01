export const addTodo = (list) => {
  console.log(list)
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('checklists')
      .doc(list.id)
      .set({
        ...list,
        todos: [
          ...list.todos,
          {
            id: 'todo' + Date.now(),
            complete: false,
            title: ''
          }
        ]
      })

    // dispatch({
    //   'TOGGLE_TODO_COMPLETE',

    // })

  }
}