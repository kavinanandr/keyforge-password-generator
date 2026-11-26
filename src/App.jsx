function App() {
  return (
    <>
      <h1>Keyforge</h1>
      <p>Generate strong, random credentials</p>
      <input type="text" readOnly />
      <button>copy</button>
      <br />
      <input type="range" min={8} max={20} />
      <label htmlFor="">Length:</label>
      <input type="checkbox" name="numbers" id="numbers" />
      <label htmlFor="numbers">Numbers (0-9)</label>
      <input type="checkbox" name="characters" id="characters" />
      <label htmlFor="characters">Characters (!@#$)</label>
    </>
  );
}

export default App;
