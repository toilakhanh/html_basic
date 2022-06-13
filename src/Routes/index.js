import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../Screens/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='users/' element={<Users />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
