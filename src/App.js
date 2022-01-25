import './App.css';

function App() {

  const handlefetch = async ()=> {
    const response = await fetch("https://cat-fact-heroukuapp.com./facts/random")
    console.log(response);
  }
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
