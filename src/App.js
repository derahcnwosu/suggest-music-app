import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import SectionTitle from './components/SectionTitle';
import MovieList from './components/MovieList';
import {MovieProvider} from '../src/context/MovieContext'


function App() {

  return (
    <div className="App">
      <MovieProvider>
        <Router>
            <Navbar />
            <Header />
          <Routes>
              <Route exact path = '/' element = {
                <>
                <SectionTitle title= 'Suggested Music'/>
                  <div className='container'>
                    <MovieList/>
                  </div>
                </>
              }>
              </Route>
              <Route exact path='/about' element = {
                <>
                <SectionTitle title= 'Our Team'/>
                  
                </>
              }></Route>
          </Routes>
        </Router>
      </MovieProvider>
    </div>
  );
}

export default App;
