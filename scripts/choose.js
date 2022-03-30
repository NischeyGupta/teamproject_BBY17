function read_display_Quote() {
    console.log("inside the function")

    // get into the right collection
    db.collection("quotes").doc("tuesday") //name of the collection and documents should matach excatly with what you have in Firestore
        .onSnapshot(function (tuesdayDoc) {
            console.log(tuesdayDoc.data()); //.data() returns data object
            document.getElementById("quote-goes-here").innerHTML = tuesdayDoc.data().quotes; //using javascript to display the data on the right place
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