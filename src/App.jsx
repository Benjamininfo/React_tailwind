import './App.css'
import Header from './components/Header'
import TodoProvider from './components/Todos/context/TodoProvider'
import TodoComputed from './components/Todos/TodoComputed'
import TodoCreate from './components/Todos/TodoCreate'
import TodoFilter from './components/Todos/TodoFilter'
import TodoList from './components/Todos/TodoList'

function App() {
    return (
        <div
            className="bg-[url('./assets/images/bg-mobile-light.jpg')]
            bg-no-repeat min-h-screen bg-contain bg-gray-100"
        >
            <Header />
            <TodoProvider>
                <main className="container mx-auto mt-6 px-4">
                    <TodoCreate />
                    <div className="bg-white rounded-md [&>article]:p-4 mt-6">
                        <TodoList />
                        <TodoComputed />
                    </div>
                    <TodoFilter />
                </main>
            </TodoProvider>

            <footer className="text-center mt-6">
                Drag and drop to reorder list
            </footer>
        </div>
    )
}

export default App
