import { useHistory } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import actions from "../../../actions/todo"
const CheckList = () => {
  const history = useHistory();
  const dispatch=useDispatch();
  const list = useSelector(state=> state.list)
  return (
    <div>
      <ul>
        {list.map((elt) => {
          return (
            <li
             
            > <button onClick={() =>dispatch(actions.deletelist(elt.id)) }
               >
              cliquer
            </button>
              {elt.tache}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CheckList;
