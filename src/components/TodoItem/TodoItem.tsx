import { Todo } from '../../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md';
import './TodoItem.css';

type Props={
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoItem: React.FC<Props> = ({todo, todos, setTodos}) => {
  return (
    <form className='todo-item'>
      <span className='todo-text'>{todo.todo}</span>

      <div className="todo-icons">
        <span className='icon'><AiFillEdit /></span>
        <span className='icon'><AiFillDelete /></span>
        <span className='icon'><MdDone /></span>
      </div>
    </form>
  )
}

export default TodoItem;