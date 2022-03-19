function read_display_Quote() {
    console.log("inside the function")

    // get into the right collection
    db.collection("quotes").doc("tuesday") //name of the collection and documents should matach excatly with what you have in Firestore
        .onSnapshot(function (tuesdayDoc) {
            console.log(tuesdayDoc.data()); //.data() returns data object
            document.getElementById("quote-goes-here").innerHTML = tuesdayDoc.data().quote; //using javascript to display the data on the right place
        })
}
//calling the function
read_display_Quote();

function insertName() {
    console.log("hey inside the insertName");
    // to check if the user is logged in
    firebase.auth().onAuthStateChanged(user => { //arrow notation
        if (user) {
            console.log(user.uid); //let me to know who is the user that logged in to get the uid
            currentUser = db.collection("users").doc(user.uid); //this line will go to the firestore and go to the document of the user
            currentUser.get().then(userDoc => {
                //get the user name
                var user_Name = userDoc.data().name;
                console.log(user_Name);
                document.getElementById("name-goes-here").innerHTML = user_Name; //html way
                // $("name-goes-here").text(user_Name);  // jquery way
            })
        }

    })
}
insertName()

function writeAccommodations() {
    //define a variable for the collection you want to create in Firestore to populate data
    var accommodationRef = db.collection("accommodations");

    accommodationRef.add({
        code: "ACCOM01",
        name: "ABC Accommodation",
        address: "#01, #1 Street",
        city: "Burnaby",
        province: "BC",
        details: "1BHK, No Balcony, Food Service Available "
    });
    accommodationRef.add({
        code: "ACCOM02",
        name: "DEF Accommodation",
        address: "#02, #2 Street",
        city: "Anmore",
        province: "BC",
        details: "2 BHK with attached bathrooms, Sea Facing rooms"
    });
    accommodationRef.add({
        code: "ACCOM03",
        name: "GHI Accommodation",
        address: "#03, #3 Street",
        city: "North Vancouver",
        province: "BC",
        details: "3 BHK with attached Balconies, a beautiful garden area included"
    });
}