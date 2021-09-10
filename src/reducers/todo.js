const initialState = { list: [] };

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TO-DO":
      return { list: [...state.list, action.payload] };
    case "TO-DELETE":
      const listeFiltre = state.list.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, list: [...listeFiltre] };
    default:
      return state;
  }
};
export default todoReducer;
