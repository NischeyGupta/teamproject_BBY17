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

function displayCards(collection) {
    let cardTemplate = document.getElementById("accommodationCardTemplate");

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
                newcard.querySelector('.card-image').src = "./images" + collection + ".jpg"; //accommodations.jpg

//                 //give unique ids to all elements for future use
//                 // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
//                 // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
//                 // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery
                document.getElementById(collection + "-go-here").appendChild(newcard);
                i++;
            })
        })
}

displayCards("accommodations");