

function MovieCard({movieObj}){

    const bannerImage = `https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`;


    return <div className="h-[500px] w-[250px] border bg-cover bg-center 
    hover:scale-110 duration-300 cursor-pointer relative
    
    
    flex items-end justify-center" 

    style={{backgroundImage:`url(${bannerImage})`}}
    >

         <div className=" absolute  cursor-pointer top-2 right-2 text-3xl rounded bg-gray-900 bg-opacity-60 p-1">
            &#128525;
        </div> 

         {/* <div className="absolute cursor-pointer top-2 right-2 text-3xl rounded bg-gray-900 opacity-60 p-1">
            &#10060;
        </div> */}

        <div className="text-white bg-gray-900 opacity-70 w-full text-center p-2">
            {movieObj.title}

        </div>


    </div>
}

export default MovieCard;
