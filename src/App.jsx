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
            className="min-h-screen bg-no-repeat bg-contain
            bg-[url('./assets/images/bg-mobile-light.jpg')]
            md:bg-[url('./assets/images/bg-desktop-light.jpg')]
            dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
            md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]
            bg-gray-100 dark:bg-gray-900"
        >
            <Header />
            <TodoProvider>
                <main className="container mx-auto mt-6 px-4 md:max-w-xl">
                    <TodoCreate />
                    <div className="bg-white rounded-md overflow-hidden dark:bg-gray-800
                            [&>article]:p-4 mt-6">
                        <TodoList />
                        <TodoComputed />
                    </div>
                    <TodoFilter />
                </main>
            </TodoProvider>

            <footer className="text-center mt-10 text-gray-400 dark:text-gray-600">
                Drag and drop to reorder list
            </footer>
        </div>
    )
}

export default App
