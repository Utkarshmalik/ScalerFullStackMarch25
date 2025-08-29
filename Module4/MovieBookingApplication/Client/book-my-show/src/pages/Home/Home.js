import { Col, Form, Row } from "antd";
import Navbar from "../../components/Navbar";
import { Input } from 'antd';
import { useEffect, useRef, useState } from "react";
import { FetchAllMovies } from "../../api/movie";
import { Link } from "react-router-dom";
import moment from "moment";




function Home(){

    const [movies, setMovies] = useState(null);
    const [searchValue, setSearchValue] = useState("");

    const allMoviesData = useRef(null);

    useEffect(()=>{

        fetchMoviesData();

    },[]);

    useEffect(()=>{

        filterMoviesBasedOnSearchValue();

    },[searchValue])


    const filterMoviesBasedOnSearchValue = ()=>{


        if(!allMoviesData.current){
            return;
        }

        const filteredMovies = allMoviesData.current.filter((movie)=>{
            return movie.movieName.toLowerCase().startsWith(searchValue.toLowerCase());
        })

        setMovies(filteredMovies);

    }


    const fetchMoviesData = async ()=>{

        const moviesData = await FetchAllMovies();

        console.log(moviesData);

        allMoviesData.current = moviesData.data;

        setMovies(moviesData.data);

    }

    const onSeachValueChange = (e)=>{

        setSearchValue(e.target.value);
    }

    return <div>

        <Navbar/>

        <Row className="d-flex justify-content-center mt-20">

            <Col lg={{span:12}} >

            <Form>
             <Input value={searchValue}
             onChange={onSeachValueChange}
             placeholder="Search Movie here" />
            </Form>

            
            
            </Col>

        </Row>


       {
          movies==null && <div className="text-center" > <h2> Fetching Movies ....</h2> </div>       
       }


       <div className="d-flex   justify-content-center mt-8">

   

        {
            movies && movies.map((movie)=>{

                return <div className="m-5 d-flex-column text-center border justify-content-between" key={movie._id}>

                    <Link to={`/movies/${movie._id}?date=${moment().format("YYYY-MM-DD")}`}>
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