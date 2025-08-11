import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route, Routes} from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import MovieDetailsPage from './pages/MovieDetailPage/MovieDetails';

function App() {
  return (

    <div>

      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/movies/:movieId' element={<MovieDetailsPage/>}/>

      </Routes>
      </BrowserRouter>
   

    </div>
  
  );
}

export default App;
