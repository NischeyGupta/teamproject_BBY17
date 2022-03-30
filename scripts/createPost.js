// function writeAccommodations() {
//     //define a variable for the collection you want to create in Firestore to populate data
//     var accommodationRef = db.collection("accommodations").add();

//     accommodationRef

//         var accomCode = accommodationsDoc.data().code;

//         // code: "",
//         // name: "",
//         // address: "",
//         // city: "",
//         // province: "",
//         // details: ""
//     });
// }

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


    db.collection("accommodations").add({
        name: accomName,
        code: accomCode,
        details: accomDetails,
        address: accomAddress,
        city: accomCity,
        province: accomProvince
    })
    .then(() => {
        console.log("Document successfully added!");
    })
    document.getElementById('accommodationInfoFields').disabled = true;
}