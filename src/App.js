
import './App.css';
import {Home} from './Components/Home/Home';
import {Employee} from './Components/Employee/Employee';
import {Department} from './Components/Department/Department';
import {BrowserRouter,Routes, Route,  NavLink} from 'react-router-dom';


function App() {
  return (
   <BrowserRouter>
   <div className='App Container'>
   <h3 className="d-flex justify-content-center m-3">
          My React App
        </h3>
   </div>
   <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/department">
                Department
              </NavLink>
            </li>
            <li className="nav-item m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/employee">
                Employee
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route  path='/home' component = {<Home/>}> </Route>
          <Route  path='/home' component = {<Department/>}> </Route>
          <Route  path='/home' component = {<Employee/>}> </Route>
        </Routes>

   </BrowserRouter>
  );
}

export default App;
