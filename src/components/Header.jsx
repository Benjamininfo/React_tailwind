import IconMoon from './Icons/IconMoon'

const Header = () => {
    return (
        <header className="container mx-auto px-4">
            <div className="flex justify-between pt-8">
                <h1
                    className="uppercase text-white text-4xl
                        font-semibold tracking-[1rem]"
                >
                    todo
                </h1>

                <button>
                    <IconMoon />
                </button>
            </div>
        </header>
    )
}

export default Header
