function App() {
  return (
    <>
      <h1 className="px-4 py-2 text-3xl">Keyforge</h1>
      <p className="p-4">Generate strong, random credentials</p>
      <section id="display-password">
        <input
          className="text-l my-2 bg-blue-200 px-2 py-4"
          type="text"
          placeholder="Password"
          readOnly
        />
        <button className="text-l bg-blue-500 p-4 text-white hover:cursor-pointer hover:brightness-120">
          copy
        </button>
      </section>

      <section id="modify-password">
        <div>
          <input
            className="my-4 hover:cursor-pointer"
            type="range"
            min={8}
            max={20}
          />
          <label className="px-4 py-2 text-xl" htmlFor="">
            Length:
          </label>
        </div>
        <div className="flex flex-wrap">
          <div className="my-2">
            <input
              className="size-4 hover:cursor-pointer"
              type="checkbox"
              name="numbers"
              id="numbers"
            />
            <label className="pr-4 pl-2 text-xl" htmlFor="numbers">
              Numbers (0-9)
            </label>
          </div>
          <div className="my-2">
            <input
              className="size-4 text-xl hover:cursor-pointer"
              type="checkbox"
              name="characters"
              id="characters"
            />
            <label className="py-2 pr-4 pl-2 text-xl" htmlFor="characters">
              Characters (!@#$)
            </label>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
