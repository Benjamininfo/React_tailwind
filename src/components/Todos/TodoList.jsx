import { useContext } from 'react'
import TodoItem from './TodoItem'
import TodoContext from './context/TodoContext'

const TodoList = () => {
    const { handleFilterTodos, todos } = useContext(TodoContext)

    const data = handleFilterTodos(todos)
    return (
        <>
            {data.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </>
    )
}

export default TodoList
