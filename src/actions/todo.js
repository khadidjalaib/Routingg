const todolist = (data) => ({
  type: "TO-DO",
  payload: data,
});

const initial = (data) => ({
  type: "INIT",
  payload: data,
});

const deletelist = (id) => ({
  type: "TO-DELETE",
  payload: id,
});
export default {
  todolist,
  deletelist,
  initial,
};
