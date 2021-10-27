import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../src/Pages/Home/Home/Home';
import './App.css';
import AddService from './Pages/AddService/AddService';
import Booking from './Pages/Booking/Booking/Booking';
import ManageService from './Pages/ManageService/ManageService';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/addservice'>
            <AddService></AddService>
          </Route>
          <Route path='/manageservice'>
            <ManageService></ManageService>
          </Route>
          <Route path='/booking/:serviceId'>
            <Booking></Booking>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
