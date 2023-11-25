import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [{ _id: 1, text: "something here" }],
    edit: {
      todo: {},
      isEdit: false,
    },
  },
  reducers: {
    remove: (state, action) => {
      return {
        ...state,
        allTodos: state.allTodos.filter((item) => item._id !== action.payload),
      };
    },

    add: (state, action) => {
      return {
        ...state,
        allTodos: [action.payload, ...state.allTodos],
      };
    },

    edit: (state, action) => {
      return {
        ...state,
        edit: { todo: action.payload, isEdit: true },
      };
    },

    update: (state, action) => {
      return {
        ...state,
        allTodos: state.allTodos.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
        edit: { todo: {}, isEdit: false },
      };
    },
  },
});

export const { remove, add, edit, update } = todoSlice.actions;

export default todoSlice.reducer;
