import './InputField.css';

interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  return (
    <form className='input' onSubmit={handleAdd}>
      <input type="text" value={todo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)} placeholder='Enter item' className='input_box' />
      <button type='submit' className='input_submit'>Add</button>
    </form>
  )
}

export default InputField;