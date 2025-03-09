import { useContext } from 'react'
import TodoContext from './context/TodoContext'

const TodoFilter = () => {
    const { filter, handleSwitchFiler } = useContext(TodoContext)

    const switchHover = (option) => {
        return filter === option
            ? 'text-blue-500 hover:text-gray-400'
            : 'text-gray-400 hover:text-blue-500'
    }

    return (
        <section className="container mx-auto px-4 mt-6">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4">
                <button
                    className={switchHover('all')}
                    onClick={() => handleSwitchFiler('all')}
                >
                    All
                </button>
                <button
                    className={switchHover('active')}
                    onClick={() => handleSwitchFiler('active')}
                >
                    Active
                </button>
                <button
                    className={switchHover('completed')}
                    onClick={() => handleSwitchFiler('completed')}
                >
                    Completed
                </button>
            </div>
        </section>
    )
}

export default TodoFilter
