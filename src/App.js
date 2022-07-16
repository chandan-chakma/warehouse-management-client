import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './pages/AddItems/AddItems';

import Home from './pages/Home/Home';
import Register from './pages/Login/Register/Register';
import SignIn from './pages/Login/SignIn/SignIn';
import Header from './pages/sharedPages/Header/Header';
import ManageInventory from './pages/Store/ManageInventory/ManageInventory';
import Update from './pages/Update/Update';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:inventoryId' element={<Update></Update>}></Route>
        <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/additem' element={<AddItems></AddItems>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>


    </div>
  );
}

export default App;
