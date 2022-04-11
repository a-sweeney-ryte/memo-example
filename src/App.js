import { useState } from 'react';
import Todos from './Todos.jsx';

// click button = new state = new render
// memo inside Todos stops it rerendering unless props updated

// add todo = todos changed
// todos = prop of Todos component = Todos component re-renders

function App() { 
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);
  const [inputValue, setInputValue] = useState('');

  const increment = () => {
    setCount(c => c + 1);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  };

  const handleClickTodoAdd = (e) => {
    e.preventDefault();
     
    setTodos(todos => [...todos, inputValue])
    setInputValue('')
  };
  console.log('todos', todos)
  return (
   <>
    <Todos todos={todos} />
    <hr />

    <form>
      <input type="text" value={inputValue} onChange={handleInputChange} name="todo"></input>
      <button onClick={handleClickTodoAdd}>Add Todo</button>
    </form>

    <div>
      Count: {count}
      <button onClick={increment}>+</button>
    </div>
   </>
  );
} 

export default App;
