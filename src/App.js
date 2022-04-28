import { Routes, Route } from 'react-router-dom'
import './App.scss';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import MovieDetail from './component/MovieDetail/MovieDetail';
import PageNotFound from './component/PageNotFound/PageNotFound';
import Footer from './component/Footer/Footer';




function App() {
  return (
    <div className="App">
    
      <Header></Header>
      <div className='Container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:imdbID' element={<MovieDetail />} />
          <Route element={<PageNotFound />} />
          
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
