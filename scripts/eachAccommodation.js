// function showDetails() {
//     // create a URL object
//     let params = new URL(window.location.href);
//     let code = params.searchParams.get("code");               //parse "id"
//     let title = params.searchParams.get("name");              //parse "collection"

//     let message = "Accommodation Name is: " + title;           //build message to display
//     message += " &nbsp | Document id is:  " + code;    
//     document.getElementById("AccommodationName").innerHTML = title;  
//     document.getElementById("details-go-here").innerHTML = message; 
// }
// showDetails();

// function showDetails() {
//     // create a URL object
//     let params = new URL(window.location.href);
//     let title = params.searchParams.get("title");               //parse "id"
//     let code = params.searchParams.get("code");   //parse "collection"

//     let message = "Hike Name is: " + title;           //build message to display
//     message += " &nbsp | Document id is:  " + code;    
//     document.getElementById("HikeName").innerHTML = title;  
//     document.getElementById("details-go-here").innerHTML = message; 
// }
// showDetails();

function showDetails() {
    // create a URL object
    let params = new URL(window.location.href);
    let AccommodationTitle = params.searchParams.get("AccommodationTitle"); //parse "collection"
    let details = params.searchParams.get("details");

    let message = "Hike Name is: " + AccommodationTitle; //build message to display   
    message += " &nbsp | Details of the accommodation are:  " + details;
    document.getElementById("AccommodationName").innerHTML = AccommodationTitle;
    document.getElementById("details-go-here").innerHTML = message;
}
showDetails();


// testHikeCard.querySelector('.read-more').href = "eachHike.html?hikeName="+hikeName +"&id=" + hikeID;