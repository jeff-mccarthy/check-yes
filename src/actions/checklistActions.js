export const fetchLists = (lists) => {
  return {
    type: 'FETCH_LISTS',
    payload: lists
  }
}

export const createChecklist = (list) => {
  return {
    type: 'CREATE_CHECKLIST',
    list
  }

}

export const toggleChecklist = (list) => {
  return {
    type: 'TOGGLE_CHECKLIST_COMPLETE',
    payload: {
      id: list.id,
      completed: !list.completed
    }
  }
}