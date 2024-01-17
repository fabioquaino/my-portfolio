import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer'

import Home from './Pages/Home';
import Resume from './Pages/Resume'
import Portfolio from './Pages/Portfolio'

function App() {
  return (
    <div className="">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
