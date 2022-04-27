import { Link, Outlet} from "react-router-dom";
import { useAuth } from "./Auth";
export default function Layout() {
  const auth = useAuth();
    return (
      <div>
        {/* <AuthStatus /> */}
  
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
          {(!auth.user) &&
          <li>
             <Link to="/login">login</Link>
          </li>}
        </ul>
  
        <Outlet />
      </div>
    );
  }