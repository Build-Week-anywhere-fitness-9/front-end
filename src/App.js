import { Routes, Route } from 'react-router-dom';
import './App.css';
import WelcomeScreen from './Components/WelcomeScreen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WelcomeScreen />} />
      </Routes>
    </div>
  );
}

export default App;
