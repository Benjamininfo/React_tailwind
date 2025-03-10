import { useContext } from 'react'
import TodoContext from './context/TodoContext'

const TodoComputed = () => {
    const { handleComputedItemsLeft, handleClearCompletes } =
        useContext(TodoContext)

    return (
        <section className="py-4 px-4 flex justify-between dark:bg-gray-800">
            <span className="text-gray-400">
                {handleComputedItemsLeft} item left
            </span>
            <button
                className="text-gray-400"
                onClick={() => handleClearCompletes()}
            >
                Clear Completed
            </button>
        </section>
    )
}

export default TodoComputed
