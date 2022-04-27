import { Component } from 'react';
import { Link, Outlet} from "react-router-dom";

export default class About extends Component {
    render(){
        return(
            <div>hii
            <Outlet />
            <Link to="kr">about Kr</Link><br/>
            <Link to="bhavesh">about Bhavesh</Link>
            </div>
           
        )
    
    }
}