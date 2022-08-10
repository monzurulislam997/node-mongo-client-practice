import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import AddUser from './Pages/AddUser/AddUser';
import UpdateUser from './Pages/UpdateUser/UpdateUser';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<AddUser></AddUser>}></Route>
        <Route path="/adduser" element={<AddUser></AddUser>}></Route>
        <Route path="/updateuser/:id" element={<UpdateUser></UpdateUser>}></Route>
      </Routes>

    </div>
  );
}

export default App;
