import lists from '../data/lists';

const checklistReducer = (state = lists, action) => {
  switch (action.type) {
    case 'FETCH_LISTS':
    return state

    case 'CREATE_CHECKLIST':
      return [
        ...state, 
        {
          ...action.list,
          created: Date.now(),
          id: 'id' + Math.round(Math.random()*1000),
          tags: [],
          completed: false,
          favorite: false,
          todos: []
        }
        
      ];

    case 'TOGGLE_CHECKLIST_COMPLETE':
      const { id, completed } = action.payload;
      const list = state.map((list) => {
        return list.id === id ? { ...list, id, completed } : list;
      });

      return list;

    default:
      return state;
  }
}

export default checklistReducer;