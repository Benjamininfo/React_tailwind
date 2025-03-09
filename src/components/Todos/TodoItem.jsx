import { useContext } from 'react'
import IconCheck from '../Icons/IconCheck'
import IconCross from '../Icons/IconCross'
import TodoContext from './context/TodoContext'

const TodoItem = ({ todo }) => {
    const { id, tittle, completed } = todo
    const { handleUpdateData, handleRemoveData } = useContext(TodoContext)

    return (
        <article className="flex gap-4 border-b border-b-gray-300">
            <button
                className={`w-5 h-5 rounded-full border-1 border-gray-400
                    ${
                        completed
                            ? 'bg-linear-to-br from-cyan-300 to-violet-500 grid place-items-center'
                            : 'inline-block'
                    }`}
                onClick={() => handleUpdateData(id)}
            >
                {completed && <IconCheck />}
            </button>
            <p className={`grow ${completed && 'text-gray-300 line-through'}`}>
                {tittle}
            </p>
            <button onClick={() => handleRemoveData(id)}>
                <IconCross />
            </button>
        </article>
    )
}

export default TodoItem
