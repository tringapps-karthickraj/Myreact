import {useNavigate} from "react-router-dom";
import { useAuth } from "./Auth";
//import photo  from './assets/'
import pic from "./assets/ms-dhoni.jpg";
import pic1 from "./assets/bhavesh.jpg";
export default function ProtectedPage() {
    const auth = useAuth();
    const divStyle = {
        width:'250px',
        height:'250px'
      };
  const navigate = useNavigate();
  function logout(){
    auth.signout();
    navigate("/")
  }
  function pics(){
    if(auth.user === 'msd'){
        return pic
    }else{
        return pic1
    }
  }
    return (auth.user && <div><h3>welcome {auth.user}</h3>
    <img style={divStyle} src={pics()} />
    
    <button onClick={logout}>logout</button>
    </div>);
  }