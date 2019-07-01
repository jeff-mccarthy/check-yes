const checklistReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_CHECKLIST':
      return state;

    case 'CREATE_CHECKLIST_ERROR':
      console.log('create project error', action.err)
      return state;

    case 'TOGGLE_CHECKLIST_COMPLETE':
      return state;

    default:
      return state;
  }
}

export default checklistReducer;