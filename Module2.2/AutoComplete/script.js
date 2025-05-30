

const inputBox = document.querySelector(".searchInput");
const suggestionBox  = document.querySelector(".suggestionBox");



function debounce(fnToMakeNetworkCall,timer){

    let timerId=null;

    return function(e){
        console.log("User has entered ",e.target.value);

        if(timerId!=null){
            console.log("Clearing the previous timer");
            clearTimeout(timerId);

        }

        timerId  = setTimeout(()=>{
            fnToMakeNetworkCall(e);
            timerId = null;
        },timer)
    }

}


async function prepareAndGiveSuggfestions(e){

    console.log("prepareAndGiveSuggfestions called");

    const searchValue = e.target.value;

    const suggestions = await getSuggestions(searchValue);

    populateSugestionsBox(suggestions);

    console.log(suggestions);
}

inputBox.addEventListener("input", debounce(prepareAndGiveSuggfestions,1000));

async function getSuggestions(searchValue){

    const countriesArr = await getCountries(searchValue);

    const countryNames = countriesArr.map((countryItem)=>{
        return countryItem.name.common;
    })

   return countryNames;

} 



let currentFetchControler = null;


async function  getCountries(searchValue){


    //some previoius request is ongoing
   if(currentFetchControler!=null){
    console.log("cancelling the ongoing request");
    //cancel the previous request
    currentFetchControler.abort();

   }

   //assigning a new controller to currentFetchController
    const abortController = new AbortController();

    currentFetchControler = abortController;


    try{
        const response = await fetch(`https://restcountries.com/v3.1/name/${searchValue}`,{
            signal:abortController.signal
        });

        //i have recieved the response
        currentFetchControler = null;

        const countriesArr = await response.json();
        return countriesArr;

    }catch(err){
        return [];
    }
}


function populateSugestionsBox(suggestions){


    const suggestionsFragment = document.createDocumentFragment();


    suggestions.forEach(suggestion => {

        const li = document.createElement('li');
        li.textContent = suggestion;

        suggestionsFragment.appendChild(li);
        
    });

    suggestionBox.innerHTML = '';
    suggestionBox.appendChild(suggestionsFragment);

}







// f => A1(f)
// r => A2 (fr)
// a => A3 (fra)
// n => A4 (fran)

// //Notes 

// In JavaScript, the AbortController and AbortSignal provide a way to abort asynchronous operations, such as network requests made with the fetch API. 
 
//  This can be useful in scenarios where you want to cancel a request 
//  if it's taking too long or if the user initiates some action that should interrupt the ongoing request.

