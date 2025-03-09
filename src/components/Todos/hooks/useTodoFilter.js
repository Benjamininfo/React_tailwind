import { useState } from 'react'

const useTodoFilter = () => {
    const [filter, setFilter] = useState('all')

    const handleFilterTodos = (todos) => {
        switch (filter) {
            case 'active':
                return todos.filter((todo) => !todo.completed)
            case 'completed':
                return todos.filter((todo) => todo.completed)
            default:
                return todos
        }
    }

    const handleSwitchFiler = (filter) => {
        setFilter(filter)
    }

    return {
        filter,
        handleFilterTodos,
        handleSwitchFiler,
    }
}

export default useTodoFilter
