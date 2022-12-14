import './TodoList.css'
import { Todo } from '../../model';
import TodoItem from '../TodoItem/TodoItem';


interface Props{
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='todos'>
      {
        todos.map((todo) =>(
          // <li key={todo.id}>{todo.todo}</li>
          <TodoItem todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
        ))}
    </div>
  )
}

export default TodoList;