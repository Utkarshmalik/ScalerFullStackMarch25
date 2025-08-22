import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { GetShowDetails } from "../../api/shows";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Col, message, Row } from "antd";
import { createBooking, makePayment } from "../../api/bookings";

import StripeCheckout from "react-stripe-checkout";



function BookShow(){

    const params = useParams();
    const showId = params.showId;

    const navigate= useNavigate();

    const [showDetails, setShowDetails] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);

  
    const onToken = async (token)=>{

        console.log("Token generated ", token);

        const paymentRequest = {
            token:token.id,
            amount:selectedSeats.length * showDetails.ticketPrice
        }

        const response = await makePayment(paymentRequest);

        console.log(response);


        if(response.success){
            message.success(response.message);


               const bookingRequest = {
            show:showId,
            seats:[...selectedSeats],
            transactionId:response.transactionId
        }

        const bookingResponse = await createBooking(bookingRequest);

        if(bookingResponse.success){
            message.success(bookingResponse.message);
            navigate("/");
        }else{
            message.error(bookingResponse.message);
        }


        }else{
            message.error(response.message);
        } 
        
        
    }


    useEffect(()=>{

        fetchShowData();

    },[]);

    const fetchShowData = async ()=>{


        const showResponse = await GetShowDetails(showId);
        setShowDetails(showResponse.data);

    }

    const getSeats = ()=>{

        const totalSeats = showDetails.totalSeats;    //120 
        const columns = 12;
        const rows =  Math.ceil(totalSeats/columns);

        let allRows = [];

        for(let i=0;i<rows;i++){
            allRows.push(i);
        };

        let allColumns = [];

        for(let i=0;i<columns;i++){
            allColumns.push(i);
        }

        const handleSeatSelect = (seatNumber)=>{

           if(!selectedSeats.includes(seatNumber)){
            setSelectedSeats([...selectedSeats, seatNumber]);
            return;
           }

           const updatedSeats = selectedSeats.filter((seat)=>seat!=seatNumber);
           setSelectedSeats(updatedSeats);

        }




        return <div>

            <div className="seat-ul"> 

                {
                    allRows.map((row)=>{

                        return <div className="seat-ul">

                            {

                                allColumns.map((col)=>{

                                    let seatNumber = row* columns + col + 1;

                                    let seatClass = "seat-btn";

                                    const isSeatBooked = showDetails.bookedSeats.includes(seatNumber);
                                    const isSeatSelected = selectedSeats.includes(seatNumber);

                                    if(isSeatBooked){
                                        seatClass+=" booked"
                                    }

                                    if(isSeatSelected){
                                        seatClass+=" selected"
                                    }


                                    return <button onClick={()=>handleSeatSelect(seatNumber)} className={seatClass}> {`${seatNumber}`} </button>
                                })


                            }


                            </div>





                    })
                }

            </div>

            <div className="mt-3 mx-auto bottom-card max-width-600">
                <div> Selected Seats : <span> {selectedSeats.join(", ")} </span> </div>
                <div> Total Price : Rs. <span> {selectedSeats.length * showDetails.ticketPrice} </span> </div>
            </div>

        </div>

    }



    return <div>

        <Navbar/>

        
              {
          showDetails==null && <div className="text-center" > <h2> Fetching Seat View ....</h2> </div>       
            }

            {

                showDetails && <div>

                    <Row>

                        <Col>

                        <Card title={

                             <div>

                                <h1> {showDetails.movie.movieName} </h1>

                                <p> {showDetails.theatre.name}  </p>
                                
                                
                                <p> {showDetails.theatre.address}  </p>


                               </div>



                        }
                        
                        extra={

                            <div className="ms-3">

                                <div>
                                    <h4> Date : {showDetails.showDate} </h4>
                                </div>


                                 <div>
                                    <h4> Time : {showDetails.showTime} </h4>
                                </div>


                                 <div>
                                    <h4> Ticket Price : {showDetails.ticketPrice} </h4>
                                </div>



                                 <div>
                                    <h4> Total Seats : {showDetails.totalSeats} | 
                                        
                                        Available Seats : {showDetails.totalSeats - showDetails.bookedSeats.length}
                                        
                                          </h4>
                                </div>


                            </div>
                            
                        }

                        style={{
                            width:"100vw"
                        }}
                        
                        >

                          {getSeats()}

                              
                        </Card>


                        </Col>


                    </Row>


                    {
                        selectedSeats.length>0 && 

                        <StripeCheckout 

                        token={onToken}
            
                        stripeKey="pk_test_51R3pTx2XhG8Zyja1v8IF4hAfqxkQzaMRAx7e9qgGerT89sUC6uDtGw0AGNQRGqNl0N51UYqzpyzn62VuyIluiDin00xHInuBQv"

                        />
                    }


                  


                    </div>



            }






    </div>

}

export default BookShow;

