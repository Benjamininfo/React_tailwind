import { useContext, useState } from 'react'
import TodoContext from './context/TodoContext'

const TodoCreate = () => {
    const { handleAddData } = useContext(TodoContext)
    const [tittle, setTittle] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        handleAddData(tittle)
        setTittle('')
    }

    return (
        <form
            onSubmit={onSubmit}
            className="flex bg-white gap-4 rounded
                    overflow-hidden py-4 px-4 items-center mt-12"
        >
            <span
                className="inline-block w-5 h-5
                        rounded-full border-1 border-gray-400"
            ></span>
            <input
                type="text"
                placeholder="Create a new todo.."
                className="w-full outline-none text-gray-400 border-none"
                value={tittle}
                onChange={(e) => setTittle(e.target.value)}
            />
        </form>
    )
}

export default TodoCreate
