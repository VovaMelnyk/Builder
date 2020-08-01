const initialState = [
  { skill: "React" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JS" },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SKILL":
      return [...state, action.payload];

    case "DELETE_SKILL":
      const newStateWithDelete = [...state];
      newStateWithDelete.splice(action.payload, 1);
      return newStateWithDelete;

    case "UPDATE_SKILL":
      const newStateWithEdit = [...state];
      newStateWithEdit.splice(
        action.payload.index,
        1,
        action.payload.editSkill
      );
      return newStateWithEdit;

    default:
      return state;
  }
};
