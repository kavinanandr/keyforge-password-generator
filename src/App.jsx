function App() {
  return (
    <>
      <h1 className="px-4 py-2 text-3xl font-bold md:pt-0 md:text-4xl md:portrait:text-5xl">
        Keyforge
      </h1>
      <p className="p-4 text-slate-500 md:text-lg md:portrait:p-6 md:portrait:text-xl">
        Generate strong, random credentials
      </p>
      <section id="display-password">
        <input
          className="my-2 rounded-l-2xl border border-slate-200 bg-slate-50 px-2 py-4 font-mono text-slate-900 placeholder:text-slate-400 md:text-lg md:portrait:px-4 md:portrait:text-2xl"
          type="text"
          placeholder="Password"
          readOnly
        />
        <button className="rounded-r-2xl bg-indigo-600 p-4 text-white hover:cursor-pointer hover:brightness-120 md:text-lg md:portrait:text-2xl">
          copy
        </button>
      </section>

      <section id="modify-password">
        <div>
          <div className="flex items-center justify-between">
            <label
              className="md: p-2 text-xl text-indigo-700 md:text-2xl md:portrait:text-3xl"
              htmlFor=""
            >
              Length:
            </label>
            <button className="my-2 size-10 rounded-full border border-indigo-100 bg-indigo-50 text-xl font-semibold text-indigo-700 md:text-2xl md:portrait:text-3xl"></button>
          </div>
          <input
            className="my-4 w-full accent-indigo-600 hover:cursor-pointer"
            type="range"
            min={8}
            max={20}
          />
        </div>
        <div className="flex flex-wrap gap-4">
          <button className="rounded-2xl border border-slate-200 bg-slate-50 p-2 text-slate-700 hover:cursor-pointer hover:bg-slate-200">
            <div className="flex items-center justify-between">
              <label
                className="pr-4 pl-2 text-xl hover:cursor-pointer md:text-2xl md:portrait:text-3xl"
                htmlFor="numbers"
              >
                Numbers
              </label>
              <input
                className="mr-2 size-5 hover:cursor-pointer md:portrait:size-6"
                type="checkbox"
                name="numbers"
                id="numbers"
              />
            </div>
            <span className="text-lg md:portrait:text-2xl">(0-9)</span>
          </button>
          <button className="rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 hover:cursor-pointer hover:bg-slate-200">
            <div className="flex items-center justify-between">
              <label
                className="pr-4 pl-2 text-xl hover:cursor-pointer md:text-2xl md:portrait:text-3xl"
                htmlFor="characters"
              >
                Characters
              </label>
              <input
                className="mr-2 size-5 hover:cursor-pointer md:portrait:size-6"
                type="checkbox"
                name="characters"
                id="characters"
              />
            </div>
            <span className="text-lg md:portrait:text-2xl">(!@#$)</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
