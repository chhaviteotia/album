// import logo from './logo.svg';
import './App.css';
import UserPage from './components/userPage/userPage';
import AlbumPage from  './components/albumPage/albumPage';
import PhotoPage from  './components/photoPage/photoPage';
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route exact path='/' element= {<UserPage></UserPage>}></Route>
        <Route exact path='/albums' element= {<AlbumPage></AlbumPage>}></Route>
        <Route exact path='/photos' element= {<PhotoPage></PhotoPage>}></Route>


      </Routes>
    </Router>
  );
}

export default App;
