import './App.css';
import  React, {useState, useEffect} from 'react'

function App() {
  const [fact, setFact] = useState({})

  useEffect( () => {
    handleFetch()
  }, [])
const handleFetch = async () => {
    const res = await fetch("https://cat-fact.herokuapp.com/facts/random")
    console.log(res)
    const data = await res.json();
    console.log(data);
    setFact(data)
  }
  return (
    <div className="App">
      <h1>Hello API's!</h1>
      <button onClick={handleFetch}>Run the fetch request!</button>
      <p>{fact.text}</p>
    </div>
  );
}

export default App;
