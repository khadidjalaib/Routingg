import CheckList from "./Components/ToDoList/Checklist/CheckList";
import InputBar from "./Components/ToDoList/InputBar/InputBar";
import { useState } from "react";
import Details from "./Components/Details/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [list, setList] = useState([]);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <header className="App-header">
            <InputBar setList={setList} list={list} />
            <CheckList list={list} />
          </header>
        </Route>
        <Route path="/details/:id">
          <Details list={list} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
