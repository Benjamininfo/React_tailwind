import { useEffect, useState } from 'react'
import IconMoon from './Icons/IconMoon'
import IconSun from './Icons/IconSun'

const initialStateDarkMode = localStorage.getItem('theme') === 'dark'

const Header = () => {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    return (
        <header className="container mx-auto px-4 md:max-w-xl">
            <div className="flex justify-between pt-8">
                <h1
                    className="uppercase text-white text-4xl
                        font-semibold tracking-[1rem]"
                >
                    todo
                </h1>

                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <IconSun /> : <IconMoon />}
                </button>
            </div>
        </header>
    )
}

export default Header
