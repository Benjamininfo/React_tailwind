import UseTodo from '../hooks/useTodo'
import useTodoFilter from '../hooks/useTodoFilter'
import TodoContext from './TodoContext'

const TodoProvider = ({ children }) => {
    const {
        todos,
        handleAddData,
        handleUpdateData,
        handleRemoveData,
        handleComputedItemsLeft,
        handleClearCompletes,
    } = UseTodo()

    const { filter, handleFilterTodos, handleSwitchFiler } = useTodoFilter()

    return (
        <TodoContext.Provider
            value={{
                todos,
                filter,
                handleAddData,
                handleUpdateData,
                handleRemoveData,
                handleComputedItemsLeft,
                handleClearCompletes,
                handleFilterTodos,
                handleSwitchFiler,
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider
