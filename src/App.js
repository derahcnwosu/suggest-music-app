import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
        <Routes>
            <Route exact path = '/' element = {
              <>
                <Header />
              </>
            }>
            </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
