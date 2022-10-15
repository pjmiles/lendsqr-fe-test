import { Routes, Route } from 'react-router-dom'
import './App.scss'
import LoginForm from "./components/LoginForm";
import { SideBar } from './components/SideBarOptions';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/users' 
        element={
        <>
        <NavBar />
        <SideBar />
        </>
        } 
        />
      </Routes> 
    </div>
  );
}

export default App;
