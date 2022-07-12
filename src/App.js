import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
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
      </Routes>


    </div>
  );
}

export default App;
