import { useState, useEffect, useRef, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumbersAllowed, setIsNumbersAllowed] = useState(false);
  const [isSymbolsAllowed, setIsSymbolsAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef();

  const generatePassword = useCallback(() => {
    let passwd = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (isNumbersAllowed) str += "1234567890";
    if (isSymbolsAllowed) str += `!"#$%&'()*+,-./:;<=>?@[]^_{|}~\``;

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length);
      passwd += str.charAt(index);
    }

    setPassword(passwd);
  }, [length, isNumbersAllowed, isSymbolsAllowed]);

  useEffect(
    () => generatePassword(),
    [length, isNumbersAllowed, isSymbolsAllowed],
  );

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  return (
    <>
      <h1 className="px-4 py-2 text-3xl font-bold md:pt-0 md:text-4xl md:portrait:text-5xl dark:text-slate-50">
        Keyforge
      </h1>
      <p className="p-4 text-slate-500 md:text-lg md:portrait:p-6 md:portrait:text-xl dark:text-slate-400">
        Generate strong, random credentials
      </p>
      <section id="display-password" className="flex items-center">
        <input
          className="rounded-l-2xl border border-slate-200 bg-slate-50 px-2 py-4 font-mono text-slate-900 caret-transparent outline-0 placeholder:text-slate-400 md:text-lg md:portrait:px-4 md:portrait:text-2xl dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
          type="text"
          placeholder="Password"
          value={password}
          ref={passwordRef}
          readOnly
        />
        <button
          className="rounded-r-2xl bg-indigo-600 p-4 text-white hover:cursor-pointer hover:brightness-120 md:text-lg md:portrait:text-2xl dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-400"
          onClick={copyPasswordToClipboard}
        >
          copy
        </button>
      </section>

      <section id="modify-password">
        <div>
          <div className="flex items-center justify-between">
            <label
              className="md: p-2 text-xl text-indigo-700 md:text-2xl md:portrait:text-3xl dark:text-slate-300"
              htmlFor=""
            >
              Length
            </label>
            <button className="my-2 size-10 rounded-full border border-indigo-100 bg-indigo-50 text-xl font-semibold text-indigo-700 md:text-2xl md:portrait:text-3xl dark:border-indigo-500/30 dark:bg-indigo-500/15 dark:text-indigo-300">
              {length}
            </button>
          </div>
          <input
            className="my-4 w-full accent-indigo-600 hover:cursor-pointer dark:accent-indigo-500"
            type="range"
            min={8}
            max={20}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-wrap gap-4">
          <button
            className="rounded-2xl border border-slate-200 bg-slate-50 p-2 text-slate-700 hover:cursor-pointer hover:bg-slate-200 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-900 dark:hover:text-slate-100"
            onClick={() => {
              setIsNumbersAllowed((prev) => !prev);
            }}
          >
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
                checked={isNumbersAllowed}
                onClick={() => setIsNumbersAllowed((prev) => !prev)}
              />
            </div>
            <span className="text-lg md:portrait:text-2xl">(0-9)</span>
          </button>
          <button
            className="rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 hover:cursor-pointer hover:bg-slate-200 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-900 dark:hover:text-slate-100"
            onClick={() => {
              setIsSymbolsAllowed((prev) => !prev);
            }}
          >
            <div className="flex items-center justify-between">
              <label
                className="pr-4 pl-2 text-xl hover:cursor-pointer md:text-2xl md:portrait:text-3xl"
                htmlFor="symbols"
              >
                Symbols
              </label>
              <input
                className="mr-2 size-5 hover:cursor-pointer md:portrait:size-6"
                type="checkbox"
                name="symbols"
                id="symbols"
                checked={isSymbolsAllowed}
                onClick={() => setIsSymbolsAllowed((prev) => !prev)}
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
