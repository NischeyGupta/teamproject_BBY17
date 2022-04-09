# teamproject_BBY17

## My Web Application (BookMyRoom.com)
 
* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

## General Info
This browser based web application to provide accommodation facilities to the visitors of the Olympics who are planning to attend the event with the help of the local people by posting their extra available spaces and renting them to the visitors. Our app will be different from the other apps because it will not focus on hotels but homestays that are very near to the event sites, which will help them reach the event spots in a very short period of time and choose according to their requirements.

	
## Technologies
Technologies used for this project:
* HTML, CSS
* JavaScript
* Bootstrap 
* Firebase


## Content
Content of the project folder:

```
 Top level of project folder: 
├── .gitignore              # Git ignore file
├── 404.html                # basic error page
├── index.html              # landing HTML file, this is what users see when you come to url
├── login.html              # HTML file for Logging in to the application
├── choose.html             # HTML file for choosing whether to browse or create an accommodation
├── browsePosts.html        # HTML file for browsing accommodations
├── createPost.html         # HTML file for creating accommodations
├── template.html           # HTML file for basic template of the HTML files
├── eachAccommodation.html  # HTML file for displaying some more information about a specific accommodation
├── saved.html              # HTML file for displaying the user's bookmarked accommodations

└── README.md               # Read me file for basic information about the project,folders etc.

It has the following subfolders and files:
├── .git                     # Folder for git repo
├── images                   # Folder for images
    /booking.jpg             # a jpg file for logo of the application for navbar
    /bookmyroom.jpg          # a jpg file for logo of the application
    /bmrlogo.jpg             # a jpg file for suggestion of logo of the application for navbar
    /logo.jpg                # a jpg file for suggestion of logo of the application for navbar
    /logo2.jpg               # a jpg file for suggestion of logo of the application for navbar
    /XYZ1.jpg                # a jpg file for an accommodation
    /abcd.jpg                # a jpg file for an accommodation
    /ACCOM01.jpg             # a jpg file for an accommodation
    /ACCOM02.jpg             # a jpg file for an accommodation
    /ACCOM03.jpg             # a jpg file for an accommodation
    /ACCOM04.jpg             # a jpg file for an accommodation
    

├── scripts                  # Folder for scripts
    /authentication.js       # js file for auhentication
    /browsePosts.js          # js file for browsePosts HTML file
    /choose.js               # js file for choose HTML file
    /firebaseAPI_BBY17.js    # js file for firebase API
    /script.js               # js file for script
    /skeleton.js             # js file for skeleton for navbar and footer
    /createPost.js           # js file for creating a post of accommodation
    /eachAccommodation.js    # js file for displaying some more information about a specific accommodation
    /profile.js              # js file for editing, saving the profile data
    /saved.js                # js file for displaying bookmarked accommodations

├── styles                   # Folder for styles
    /styles.css              # css file for HTML files

├── text                     # Folder for texts
    /footer.html             # HTML file for footer
    /nav.html                # HTML file for navbar


Firebase hosting files: 
├── .firebaserc
├── .firebase
    /hosting..cache
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
└── storage.rules  
# auto-generated firebase/firestore data
```

Tips for file naming files and folders:
* use lowercase with no spaces
* use dashes (not underscore) for word separation