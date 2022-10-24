import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='/404' element={<ErrorPage /> } />
    </Routes>
  );
}

export default App;
