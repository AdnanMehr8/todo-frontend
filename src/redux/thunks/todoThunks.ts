import { createAsyncThunk } from '@reduxjs/toolkit';
import { Todo } from '../slices/todoSlice';
import api from '../../api/api';

// Fetch todos
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/api/todos');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch todos');
    }
  }
);

// Add todo
export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (text: string, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/todos', { text });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to add todo');
    }
  }
);

// Update todo
export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async ({ id, text }: { id: string; text: string }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/api/todos/${id}`, { text });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update todo');
    }
  }
);

// Delete todo
export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id: string, { rejectWithValue }) => {
    try {
      await api.delete(`/api/todos/${id}`);
      return id;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete todo');
    }
  }
);

// Toggle todo
export const toggleTodo = createAsyncThunk(
  'todos/toggleTodo',
  async ({ id, completed }: { id: string; completed: boolean }, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/api/todos/${id}/toggle`, { completed });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to toggle todo');
    }
  }
);