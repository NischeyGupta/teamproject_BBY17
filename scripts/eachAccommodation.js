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