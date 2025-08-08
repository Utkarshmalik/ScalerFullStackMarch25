import { Col, Row } from "antd";
import Navbar from "../../components/Navbar";
import { Input } from 'antd';
import { useEffect, useState } from "react";
import { FetchAllMovies } from "../../api/movie";
import { Link } from "react-router-dom";

function Home(){

    const [movies, setMovies] = useState(null);

    useEffect(()=>{

        fetchMoviesData();

    },[]);


    const fetchMoviesData = async ()=>{

        const moviesData = await FetchAllMovies();

        setMovies(moviesData.data);


    }

    return <div>

        <Navbar/>

        <Row className="d-flex justify-content-center mt-20">

            <Col lg={{span:12}} >

             <Input placeholder="Search Movie here" />
            
            </Col>

        </Row>


       {
          movies==null && <div className="text-center" > <h2> Fetching Movies ....</h2> </div>       
       }


       <div className="d-flex   justify-content-center mt-8">

   

        {
            movies && movies.map((movie)=>{

                return <div className="m-5 d-flex-column text-center border justify-content-between" key={movie._id}>

                    <Link to={`/movies/${movie._id}`}>
                    <img src={movie.poster} width={280} />

                    <h3> {movie.movieName} </h3>

                    </Link>

                </div>   

            })
        }

            </div>

        <Row>



        </Row>


    </div>

}

export default Home;