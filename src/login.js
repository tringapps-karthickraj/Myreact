import {useNavigate} from "react-router-dom";
import { useAuth } from "./Auth";


export default function LoginPage() {
  const auth = useAuth();
  const navigate = useNavigate();
  
    const  handleSubmit = (event) => {
      event.preventDefault();
      let formData = new FormData(event.currentTarget);
      let username = formData.get("username");
      if(username){
        auth.signin(username);
        navigate("/protected");
      }
    }
  
    return (
      <div>
        {/* <p>You must log in to view the page at {from}</p> */}
  
        <form onSubmit={handleSubmit}>
          <label>
            Username: <input name="username" type="text" />
          </label>{" "}
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }