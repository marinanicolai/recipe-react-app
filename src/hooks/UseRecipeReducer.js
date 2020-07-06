const initialState = {
  form: {
    directions: "",
    ingredients: "",
    title: "",
    published: false,
  },
  notification: {
    notificationOpen: false,
    message: "",
    title: "",
    type: "",
  },
  viewModalOpen: false,
  addModalOpen: false,
  recipeData: {},
  recipeId: "",
  recipes: [],
  isEditing: false,
  loading: false,
};

const recipeReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "SET_RECIPES":
      newState = { ...state, recipes: action?.recipes };
      return newState;
    case "REMOVE_RECIPE":
      state.recipes(recipes.filter((recipes) => id !== e.target.id));
      return state;
    case "ADD_RECIPE":
      newState = { ...state };
      const { title, ingredients, directions } = action.payload;
      newState.recipes = [
        ...newState.recipes, // we are copying here recipes from the old state and adding a new one
        { title, ingredients, directions },
      ];

      return newState;
    default:
      return state;
  }