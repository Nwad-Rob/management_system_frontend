import logo from './logo.svg';
import './App.css';
import ListEmployee from './component/ListEmployee';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import CreateEmployeeComponent from './component/CreateEmployeeComponent';
import AddEmployeeComponent from './component/AddEmployee';


function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path="/" exact Componentt={ListEmployee} />
              <Route path="/employees" Component={ListEmployee} />
              <Route path='/employees' Component={CreateEmployeeComponent}/>
              <Route path="/add-employee" Component={AddEmployeeComponent} />
              <Route path="/update-employee/:id" Component={AddEmployeeComponent} />
            </Routes>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </div>

  );
}

export default App;
