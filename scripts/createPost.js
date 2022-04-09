function editAccommodationInfo() {

    //Enable the form fields
    document.getElementById('accommodationInfoFields').disabled = false;
}

editAccommodationInfo();

function saveAccommodationInfo() {

    var accomName = document.getElementById('nameInput').value; //get the value of the field with id="nameInput"
    var accomCode = document.getElementById('codeInput').value; //get the value of the field with id="codeInput"
    var accomDetails = document.getElementById('detailsInput').value; //get the value of the field with id="detailsInput"
    var accomAddress = document.getElementById('addressInput').value; //get the value of the field with id="addressInput"
    var accomCity = document.getElementById('cityInput').value; //get the value of the field with id="cityInput"
    var accomProvince = document.getElementById('provinceInput').value; //get the value of the field with id="provinceInput"
    var accomImage = document.getElementById('mypic-input').value;


    db.collection("accommodations").add({

            name: accomName,
            code: accomCode,
            details: accomDetails,
            address: accomAddress,
            city: accomCity,
            province: accomProvince
        })

        .then(function (doc) {
            console.log(doc.id); //prints id of the newly added doc
            savePicture(doc.id) //id of newly created post
            console.log("Document successfully added!");
        })

    document.getElementById('accommodationInfoFields').disabled = true;
}

//----------------------------------------------------
// This event listener waits for user to upload a image
//-----------------------------------------------------
var theFile; //global variable pointing to the locally picked file object

function addImagePicker() {

    const image = document.getElementById("mypic-goes-here"); // pointer 
    fileChoice.addEventListener('change', function (e) { //event listener
        theFile = e.target.files[0];
        var blob = URL.createObjectURL(theFile);
        image.src = blob; //show this DOM image for now

    })
}

//------------------------------------------------------
// This function gets the picture that was recently picked
// and saved into global variable, and "put" it into Firebase Storage.
// After it is done, then the URL is obtained.
// This URL is saved into the post object associated with this image
//-------------------------------------------------------

function savePicture(postid) {

    //get a pointer to where we went the picture to be saved
    var storageRef = firebase.storage().ref(postid + ".jpg")

    //upload the picked file with .put()
    storageRef.put(theFile) //global pointer to the picked file

        .then(function (snap) {

            //the file has successfully been put into storage
            console.log('Uploaded to Cloud Storage.');

            //get the URL of stored file with .getDownloadURL()
            storageRef.getDownloadURL()

                .then(function (url) { // Get URL of the uploaded file
                    console.log(url); // Save the URL into users collection
                    console.log(`File URL: ${url}`);
                    db.collection("accommodations").doc(postid).update({
                            "image": url
                        })

                        .then(function () {
                            console.log('Added post picture to Firestore.');
                            //window.location.href="main.html";
                        })
                })
        })
}

function showDatabasePicture() {
    db.collection("accommodations")
        .get()
        .then(function (snap) {

            snap.forEach(function (doc) {

                var pictureURL = doc.data().image; //url is ready to use
                console.log(pictureURL);
                if (pictureURL) { //ie, not undefined or null
                    document.getElementById("database-picture-goes-here").innerHTML +=
                        "<img src=" + pictureURL + "> <br>";

                }
            })
        })
}