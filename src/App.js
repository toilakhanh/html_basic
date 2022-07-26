import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteSelectedItem, removeItem, setInput, updateEditableItem, updateSelectedItem, updateValueItem } from './store/demo';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const todoList = useSelector((store) => store.demo.todoList);

  const checkSelectedItem = () => {
    return todoList.find((item) => item.selected);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <h4>Password</h4>
          <input
            value={store.demo.input}
            onChange={(e) => {
              const value = e.target.value;
              dispatch(setInput(value));
            }}
            placeholder=''
            style={{ padding: 10, fontSize: 24 }}
          ></input>
          <button
            onClick={() => {
              dispatch(addItem());
            }}
            style={{ padding: 15, marginLeft: 10 }}
          >
            Add
          </button>
        </div>
        <div style={{ marginTop: 20, width: '40%' }}>
          {todoList.map((item, index) => {
            return (
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', border: '1px solid black', padding: 10 }} key={item.id}>
                <input
                  type='checkbox'
                  style={{ height: 30, width: 30 }}
                  checked={item.selected}
                  onChange={() => {
                    dispatch(updateSelectedItem(item.id));
                  }}
                />
                <input
                  onChange={(e) => {
                    dispatch(updateValueItem({ id: item.id, value: e.target.value }));
                  }}
                  value={item.value}
                  disabled={!item.editable}
                  style={{ backgroundColor: item.editable ? 'white' : 'transparent', border: 'none' }}
                />
                <div>
                  <button
                    onClick={() => {
                      dispatch(updateEditableItem(item.id));
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      dispatch(removeItem(item.id));
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {!!todoList?.length && checkSelectedItem() && (
          <button
            style={{ padding: 20, width: '50%', marginTop: 30 }}
            onClick={() => {
              dispatch(deleteSelectedItem());
            }}
          >
            Delete
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
