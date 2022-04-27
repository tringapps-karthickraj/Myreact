//import logo from './logo.svg';
import './App.css';
//import Displaycomponent from './Displaycomponent';
//import Showbutton from './Showbutton';
import {
  Routes,
  Route
} from "react-router-dom";
import LoginPage from './login';
import PublicPage from './publicpage';
import Layout from './layout';
import ProtectedPage from './protected';
import {AuthProvider} from './Auth';
//import About from  './about';
//import Param from './param';


// function App() {
//    //const names=[{name:"karthick Raj",age:20,qualification:"Bsc cs",phno:"1234567890",isActive:false},{name:"Bhavesh",age:21,qualification:"Bsc cs",phno:"1234567823",isActive:false}];
//    // let pass = "qwerty"
//     return (
//     <div className="App">
//       {/* <div>Details</div>
//       <Displaycomponent array={names}/>
//       <Showbutton  passName={pass}/> */}
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//       </nav>
//           <Routes >
//             <Route path="/"/>
//             <Route path="/about" element={<About/>}>
//               <Route path=':param' element={<Param/>}/>
              
//             </Route>
//           </Routes>
      
//     </div>
//   );
// }
//import { fakeAuthProvider } from "./auth";
 function App() {
  return (
    <div>
      <AuthProvider>
    <Layout/>
      <Routes>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/protected" element={<ProtectedPage />} />
          {/* <Route path="/protected" element={<ProtectedPage />} /> */}
          {/* <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          /> */}
      </Routes>
      </AuthProvider>
      </div>
  );
}

export default App;
