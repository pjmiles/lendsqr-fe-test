import { Routes, Route } from 'react-router-dom'
import './App.scss'
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginForm />} />
      </Routes> 
    </div>
  );
}

export default App;
