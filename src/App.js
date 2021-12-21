import { Routes, Route } from 'react-router-dom';
import './App.css';
import WelcomeScreen from './components/WelcomeScreen';
import ClassList from './components/ClassList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WelcomeScreen />} />
        <Route path='/classlist' element={<ClassList />} />
      </Routes>
    </div>
  );
}

export default App;
