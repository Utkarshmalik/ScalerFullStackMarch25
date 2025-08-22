import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route, Routes} from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import MovieDetailsPage from './pages/MovieDetailPage/MovieDetails';
import BookShow from './pages/BookShow/BookShow';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';

function App() {
  return (

    <div>

      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/movies/:movieId' element={<MovieDetailsPage/>}/>
        <Route path='/book-show/:showId' element={<BookShow/>}/>
        <Route path='/forget' element={<ForgetPassword/>}/>
        <Route path='/reset' element={<ResetPassword/>}/>

      </Routes>
      </BrowserRouter>
   

    </div>
  
  );
}

export default App;
