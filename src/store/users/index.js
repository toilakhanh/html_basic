import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '@/services/api';
import { LIST_USERS } from '@/services/endpoint';

export const fetchListUsers = createAsyncThunk('users/fetchListUsers', async (page) => {
  const response = await api.get(LIST_USERS, { params: { page } });
  return response.data;
});

const initialState = {
  list: [],
  error: '',
  loading: false,
};

export const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListUsers.pending, (state, action) => {
      state.error = '';
      state.loading = true;
    });
    builder.addCase(fetchListUsers.fulfilled, (state, action) => {
      state.list = action.payload.data;
      state.loading = false;
    });
    builder.addCase(fetchListUsers.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const {} = slice.actions;

export default slice.reducer;
