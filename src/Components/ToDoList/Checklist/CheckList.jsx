import { useHistory } from "react-router-dom";
const CheckList = (props) => {
  const history = useHistory();
  return (
    <div>
      <ul>
        {props.list.map((elt) => {
          return (
            <li
              onClick={() => {
                history.push(`/details/${elt.id}`);
              }}
            >
              {elt.tache}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CheckList;
