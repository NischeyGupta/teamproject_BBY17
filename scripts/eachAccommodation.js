function showDetails() {
    // create a URL object
    let params = new URL(window.location.href);
    let code = params.searchParams.get("code");               //parse "id"
    let title = params.searchParams.get("name");              //parse "collection"

    let message = "Accommodation Name is: " + title;           //build message to display
    message += " &nbsp | Document id is:  " + code;    
    document.getElementById("AccommodationName").innerHTML = title;  
    document.getElementById("details-go-here").innerHTML = message; 
}
showDetails();