import {Create, Read, Update } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={ <Create/>}></Route>
      <Route path='/read' element={ <Read/>}></Route>
      <Route path='/update' element={ <Update/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
