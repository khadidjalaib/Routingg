const todolist = (data) => ({
  type: "TO-DO",
  payload: data,
});

const deletelist = (id) => ({
  type: "TO-DELETE",
  payload: id,
});
export default {
  todolist,
  deletelist,
};
