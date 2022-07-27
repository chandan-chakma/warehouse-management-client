import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './pages/AddItems/AddItems';
import Blog from './pages/Blog/Blog';

import Home from './pages/Home/Home';
import Register from './pages/Login/Register/Register';
import SignIn from './pages/Login/SignIn/SignIn';
import NotFound from './pages/NotFound/NotFound';
import Header from './pages/sharedPages/Header/Header';
import RequireAuth from './pages/sharedPages/RequireAuth/RequireAuth';
import ManageInventory from './pages/Store/ManageInventory/ManageInventory';
import Update from './pages/Update/Update';
import MyItem from './pages/MyItem/MyItem';

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:inventoryId' element={<Update></Update>}></Route>
        <Route path='/manageInventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/myitem' element={<MyItem></MyItem>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/additem' element={<RequireAuth>
          <AddItems></AddItems>
        </RequireAuth>
        }></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


    </div>
  );
}

export default App;
