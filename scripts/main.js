function read_display_Quote() {
    // console.log("inside the function")

    // get into the right collection
    db.collection("quotes").doc("tuesday")
        .onSnapshot(tuesdayDoc => {
            // console.log(tuesdayDoc.data());
            document.getElementById("quote-goes-here").innerHTML = tuesdayDoc.data().quote;
        })
}
read_display_Quote();

function insertName() {
    // console.log("hey inside the insertName");
    // to check if the user is logged in
    firebase.auth().onAuthStateChanged(user => {
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

function writeHikes() {
    //define a variable for the collection you want to create in Firestore to populate data
    var hikesRef = db.collection("hikes");

    hikesRef.add({
        code: "BBY01",
        name: "Burnaby Lake Park Trail",
        city: "Burnaby",
        province: "BC",
        level: "easy",
        length: "10 km",
        details: "Nischey goes here regularly"
    });
    hikesRef.add({
        code: "AM01",
        name: "Buntzen Lake Trail Trail",
        city: "Anmore",
        province: "BC",
        level: "moderate",
        length: "10.5 km",
        details: "Nischey loves this hike"
    });
    hikesRef.add({
        code: "NV01",
        name: "Mount Seymoure Trail",
        city: "North Vancouver",
        province: "BC",
        level: "hard",
        length: "8.2 km",
        details: "Nischey goes here very often."
    });
}

function displayCards(collection) {
    let cardTemplate = document.getElementById("hikeCardTemplate");

    db.collection(collection).get()
        .then(snap => {
            var i = 1;
            snap.forEach(doc => { //iterate thru each doc
                var title = doc.data().name; // get value of the "name" key
                var details = doc.data().details; // get value of the "details" key
                let newcard = cardTemplate.content.cloneNode(true);

                //update title and text and image
                newcard.querySelector('.card-title').innerHTML = title;
                newcard.querySelector('.card-text').innerHTML = details;
                newcard.querySelector('.card-image').src = "./images" + collection + ".jpg"; //hikes.jpg

                //give unique ids to all elements for future use
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery
                document.getElementById(collection + "-go-here").appendChild(newcard);
                i++;
            })
        })
}

displayCards("hikes");