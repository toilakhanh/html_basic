import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: [
    // { id: 1658668726484, value: '789', selected: false, editable: false },
    // { id: 1658668723826, value: '456', selected: false, editable: false },
    // { id: 1658668720575, value: '123', selected: false, editable: false },
  ],
  input: '',
};

export const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    addItem: (state) => {
      if (!state.input) return;
      const item = {
        id: Date.now(),
        value: state.input,
        selected: false,
        editable: false,
      };
      const list = [...state.todoList];
      list.unshift(item);
      state.todoList = list;
      state.input = '';
    },
    setInput: (state, action) => {
      state.input = action.payload;
    },
    removeItem: (state, action) => {
      const list = [...state.todoList].filter((item) => item.id !== action.payload);
      state.todoList = list;
    },
    updateSelectedItem: (state, action) => {
      const item = [...state.todoList].find((i) => i.id === action.payload);
      item.selected = !item.selected;
    },
    deleteSelectedItem: (state) => {
      const list = [...state.todoList].filter((item) => !item.selected);
      state.todoList = list;
    },
    updateEditableItem: (state, action) => {
      const item = [...state.todoList].find((i) => i.id === action.payload);
      item.editable = !item.editable;
      state.todoList.filter((i) => i.id !== action.payload).forEach((o) => (o.editable = false));
    },
    updateValueItem: (state, action) => {
      const item = [...state.todoList].find((i) => i.id === action.payload.id);
      item.value = action.payload.value;
    },
  },
});

export const { setInput, addItem, removeItem, updateSelectedItem, deleteSelectedItem, updateEditableItem, updateValueItem } = demoSlice.actions;

export default demoSlice.reducer;
