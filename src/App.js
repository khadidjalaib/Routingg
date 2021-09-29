import CheckList from "./Components/ToDoList/Checklist/CheckList";
import InputBar from "./Components/ToDoList/InputBar/InputBar";
import { useState, useEffect } from "react";
import Details from "./Components/Details/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import action from "./actions/todo";
function App() {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      const reponse = await axios.get("http://localhost:5000/todos");
      dispatch(action.initial(reponse.data));
    };
    getData();
  }, []);

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
