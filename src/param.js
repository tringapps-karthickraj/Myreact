import { useParams } from "react-router-dom";

export default function Param() {
   let {param} = useParams();
    return(<div>i Am {param}</div>);


}