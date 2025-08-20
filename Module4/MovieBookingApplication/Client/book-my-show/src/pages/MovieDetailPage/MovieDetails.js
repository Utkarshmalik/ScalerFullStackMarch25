import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { FetchMovieById } from "../../api/movie";
import { Col, Flex, Input, Row } from "antd";
import { GetShowsByMovieId } from "../../api/shows";


function MovieDetailsPage(){


    const [movie, setMovie] = useState(null);
    const [searchParams , setSearchParams] = useSearchParams();
    const [date, setDate] = useState(searchParams.get('date'));
    const [shows, setShows] = useState(null);

    console.log(searchParams);
    const navigate = useNavigate();
    const params = useParams();
    const movieId = params.movieId;

    console.log(movie);


    useEffect(()=>{

        fetchMovieDetails();

    },[]);

    useEffect(()=>{
        fetchShowDetails();
    },[date]);


    

    const fetchMovieDetails = async ()=>{

        const movieDetailsReponse =  await FetchMovieById(movieId);
        setMovie(movieDetailsReponse.data);

    }


    const fetchShowDetails = async (req,res)=>{


        const showsResponse = await GetShowsByMovieId(movieId, date);

        setShows(showsResponse.data);

        
    }

    const handleDateChange = (e) => {

        navigate(`/movies/${movie._id}?date=${e.target.value}`);
        setDate(e.target.value);

    }



    return <div>

            <Navbar/>


              {
          movie==null && <div className="text-center" > <h2> Fetching Movie Details ....</h2> </div>       
            }


              {
               movie!=null && (

                <Flex className="mt-8 ms-3" align="center" gap="large" > 

                    <div>
                        <img src={movie.poster} width={300} />
                     </div>   

                     <div>

                        <h1> {movie.movieName} </h1>

                        <p> Language : {movie.language} </p>
                        <p> Genre : {movie.genre.join(", ")} </p>
                        <p> Release Date : {movie.releaseDate} </p>
                        <p> Duration : {movie.duration} </p>


                        <hr/>
                        

                        <div className="mt-3">

                            <label> Choose the date </label>

                            <Input onChange={handleDateChange} value={date} type="date" />

                        </div>


                     </div>   

                 </Flex>   


               )      
            }


            {
          shows==null && <div className="text-center" > <h2> Fetching Shows  ....</h2> </div>       
            }


            {
            shows &&  Object.keys(shows).length==0  &&  <div className=" primary text-center" > <h2> Currently,  No Theatres available for this movie </h2> </div>       
            }


               {
            shows &&  Object.keys(shows).length>0  &&  

            <div className="ms-3">

                <h2> Theatres </h2>

                {

                    Object.keys(shows).map((theatreId)=>{

                        const allShowsForThisTheatre= shows[theatreId];
                        const theatreDetails = allShowsForThisTheatre[0].theatre;

                        return <div>

                              <Row gutter={24}>

                                <Col lg={{span:12}} >
                                <h3> {theatreDetails.name} </h3>
                                <p> {theatreDetails.address} </p>
                                </Col>

                                <Col>

                                <ul className="show-ul">

                                {
                                        allShowsForThisTheatre.map((show)=>{

                                            return   <Link to={`/book-show/${show._id}`} >
                                            <li > {show.showTime} </li>

                                            </Link>
                                        })
                                    }

                                </ul>
                                
                                
                                </Col>

                              
                                



                            </Row>

                            </div>



                    })



                }



             </div>    
            
            
           
           
           
           
           
           
           }








    </div>
}

export default MovieDetailsPage;