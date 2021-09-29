import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../../actions/todo";
import axios from "axios";
const CheckList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);
  return (
    <div>
      <ul>
        {list.map((elt) => {
          return (
            <li>
              <button
                onClick={async () => {
                  const newReponse = await axios.delete(
                    `http://localhost:5000/todos/${elt._id}`
                  );

                  dispatch(actions.deletelist(elt._id));
                }}
              >
                Delete
              </button>
              {elt.task}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CheckList;
