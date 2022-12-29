
import './App.css';
import UsersList from './components/UsersList';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import DeleteUser from './components/DeletUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Crud Mern Stack</h1>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UsersList />} exact></Route>
          <Route path='/CreateUser' element={<CreateUser />} exact></Route>
          <Route path='/EditUser' element={<EditUser />} exact></Route>
          <Route path='/DeleteUser' element={<DeleteUser />} exact></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
