import './App.css';
import {useState,useEffect} from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
} from "react-router-dom";

function App() {
  const [fact,setFact] = useState("");
  const fetchData = () => {
    fetch("https://asli-fun-fact-api.herokuapp.com/").then((res) => res.json()).then((data) => setFact(data.data.fact));
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
        <h1>FAN FAK ASIK!</h1>
      {fact&&<p>{fact}</p>}
      <button onClick = {fetchData}>AAAAAAAHHHH</button>
      <br/><br/>
      <Link to="/gaknemuhiks">
      <button>COBA KLIK</button>
      </Link>  
        </Route>
        <Route path="/profile" exact><h1>Hai aku profile</h1></Route>
        <Route path="*"><h1>aku 404</h1></Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
