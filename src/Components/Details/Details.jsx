import { useParams } from "react-router-dom";
const Details = (props) => {
  const { id } = useParams();
  return <div> {props.list.find((ele) => ele.id == id).tache} </div>;
};

export default Details;
