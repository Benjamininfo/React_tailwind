import "./App.css";
import CrossIcon from "./components/Icons/CrossIcon";
import MoonIcon from "./components/Icons/MoonIcon";

function App() {
  return (
    <div
      className="bg-[url('./assets/images/bg-mobile-light.jpg')]
      bg-no-repeat min-h-screen
      bg-contain bg-gray-100"
    >
      <header className="container mx-auto px-4">
        <div className="flex justify-between pt-8">
          <h1
            className="uppercase
          text-white text-4xl font-semibold
            tracking-[1rem]"
          >
            todo
          </h1>
          <button>
            <MoonIcon />
          </button>
        </div>
        <form
          className="flex bg-white gap-4 rounded overflow-hidden py-4 px-4
        items-center mt-12"
        >
          <span
            className="inline-block w-5 h-5
                      rounded-full border-1 border-gray-400"
          ></span>
          <input
            type="text"
            placeholder="Create a new todo.."
            className="w-full outline-none text-gray-400 border-none"
          />
        </form>
      </header>
      <main className="container mx-auto mt-6 px-4">
        <div className="bg-white rounded-md [&>article]:p-4">
          <article className="flex gap-4 border-b border-b-gray-300">
            <button
              className="inline-block w-5 h-5
                      rounded-full border-1 border-gray-400"
            ></button>
            <p className="grow">complite online js</p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-300">
            <button
              className="inline-block w-5 h-5
                      rounded-full border-1 border-gray-400"
            ></button>
            <p className="grow">complite online js</p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-300">
            <button
              className="inline-block w-5 h-5
                      rounded-full border-1 border-gray-400"
            ></button>
            <p className="grow">complite online js</p>
            <button>
              <CrossIcon />
            </button>
          </article>

          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400">5 items left </span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto px-4 mt-6">
        <div className="flex justify-center gap-4 rounded-md bg-white p-4">
          <button className="text-blue-500">All</button>
          <button className="hover:text-blue-500">Active</button>
          <button className="hover:text-blue-500">Completed</button>
        </div>
      </section>

      <section className="text-center mt-6">
        Drag and drop to reorder list
      </section>
    </div>
  );
}

export default App;
