firebase.auth().onAuthStateChanged(user => {
    if (user) {
        getBookmarks(user)
    } else {
        console.log("No user is signed in");
    }
});

function getBookmarks(user) {
    db.collection("users").doc(user.uid).get()
        .then(userDoc => {
            var bookmarks = userDoc.data().bookmarks;
            console.log(bookmarks);

            let accommodationCardTemplate = document.getElementById("accommodationCardTemplate");

            bookmarks.forEach(thisAccomID => {
                console.log(thisAccomID);
                db.collection("accommodations").where("code", "==", thisAccomID).get().then(snap => {
                    size = snap.size;
                    queryData = snap.docs;

                    if (size = 1) {
                        var doc = queryData[0].data();
                        var title = doc.data().name; // get value of the "name" key
                        var details = doc.data().details; // get value of the "details" key
                        var code = doc.data().code; // get value of the "details" key
                        // var province = doc.data().province; // get value of the "province" key
                        let newcard = accommodationCardTemplate.content.cloneNode(true);

                        //update title and text and image
                        newcard.querySelector('.card-title').innerHTML = title;
                        newcard.querySelector('.card-text').innerHTML = details;
                        newcard.querySelector('a').onclick = () => setAccommodationsData(code);

                        newcard.querySelector('.card-image').src = "./images/" + code + ".jpg"; //accommodations.jpg

                        document.getElementById(collection + "-go-here").appendChild(newcard);
                        i++;
                    } else {
                        console.log("Query has more than one data")
                    }

                })

            });
        })
}


function getBookmarks(user) {
    db.collection("users").doc(user.uid).get()
        .then(userDoc => {
            var bookmarks = userDoc.data().bookmarks;
            console.log(bookmarks);

            let CardTemplate = document.getElementById("accommodationCardTemplate");

            bookmarks.forEach(code => {
                console.log(code);
                db.collection("accommodations").where("code", "==", code).get().then(snap => {
                    size = snap.size;
                    queryData = snap.docs;
                    // console.log(bookmarks);
                    if (size != 1) {
                        var doc = queryData[0].data();
                        var title = doc.data().name; // get value of the "name" key
                        var details = doc.data().details; // get value of the "details" key
                        // var code = doc.data().code; // get value of the "details" key
                        let newCard = CardTemplate.content.cloneNode(true);
                        newCard.querySelector('.card-title').innerHTML = title;
                        newCard.querySelector('.card-text').innerHTML = details;
                        newCard.querySelector('a').onclick = () => setAccommodationsData(code);
                        newCard.querySelector('.card-image').src = "./images/" + code + ".jpg"; //accommodations.jpg


                        document.getElementById(collection + "-go-here").appendChild(newCard);
                    } else {
                        console.log("Query has more than one data")
                    }

                })

            });
        })
}