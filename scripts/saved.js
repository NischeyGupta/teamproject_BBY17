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

                    if (size == 1) {

                        var doc = queryData[0].data();
                        var title = doc.name; // gets the name fiels
                        var details = doc.details; // get the details
                        var code = doc.code; // gets the code
                        // var province = doc.data().province; // get value of the "province" key
                        let newcard = accommodationCardTemplate.content.cloneNode(true);

                        //update title and text and image
                        newcard.querySelector('.card-title').innerHTML = title;
                        newcard.querySelector('.card-text').innerHTML = details;
                        newcard.querySelector('a').onclick = () => setAccommodationsData(code);

                        newcard.querySelector('.card-image').src = "./images/" + code + ".jpg"; //accommodations.jpg


                        accommodationCardGroup.appendChild(newcard);
                        // document.getElementById(collection + "-go-here").appendChild(newcard);

                    } else {

                        console.log("Query has more than one data")

                    }

                })

            });
        })
}