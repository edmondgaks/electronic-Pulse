import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages'
import Form from './pages/Form'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
