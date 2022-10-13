import { Routes, Route } from 'react-router-dom'
import './App.scss'
import LoginForm from "./components/LoginForm";
import { SideBar } from './components/SideBarOptions';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/users' element={<SideBar />} />
      </Routes> 
    </div>
  );
}

export default App;
