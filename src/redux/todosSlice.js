import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';

const todosAdaptor = createEntityAdapter();
// const initialState = todosAdaptor.getInitialState()
export const TodoSelector = todosAdaptor.getSelectors(state => state.todos);

const todosSlice = createSlice({
  name: 'todos',
  initialState: todosAdaptor.getInitialState(),
  reducers: {
    addTodo: todosAdaptor.addOne,
    deleteTodo: todosAdaptor.removeOne,
    deleteAllTodo: todosAdaptor.removeAll,
    deleteAllCompleted: todosAdaptor.removeMany,
    changeTodoCompleted: todosAdaptor.updateOne,
    
  },
});

export const {
  addTodo,
  deleteTodo,
  deleteAllTodo,
  changeTodoCompleted,
  deleteAllCompleted,
  
} = todosSlice.actions;
export default todosSlice.reducer;
