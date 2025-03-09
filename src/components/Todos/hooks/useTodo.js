import { useState } from 'react'

const initialTodo = [
    { id: 1, tittle: 'Complete online JavaScript course', completed: true },
    { id: 2, tittle: 'Jog around the park 3x', completed: false },
    { id: 3, tittle: '10 minutes meditation', completed: false },
    { id: 4, tittle: 'Read for 1 hour', completed: false },
    { id: 5, tittle: 'Pick up groceries', completed: false },
    { id: 6, tittle: 'Complete Todo App on Frontend Mentor', completed: false },
]

const UseTodo = () => {
    const [todos, setTodo] = useState(initialTodo)

    const handleAddData = (tittle) => {
        const newTodo = {
            id: Date.now(),
            tittle,
            completed: false,
        }

        setTodo([...todos, newTodo])
    }

    const handleUpdateData = (id) => {
        setTodo(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }

    const handleRemoveData = (id) => {
        setTodo(todos.filter((todo) => todo.id !== id))
    }

    const handleComputedItemsLeft = todos.filter(
        (todo) => !todo.completed
    ).length

    const handleClearCompletes = () => {
        setTodo(todos.filter((todo) => !todo.completed))
    }

    return {
        todos,
        handleAddData,
        handleUpdateData,
        handleRemoveData,
        handleComputedItemsLeft,
        handleClearCompletes,
    }
}

export default UseTodo
