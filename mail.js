const firebaseConfig = {
  apiKey: "AIzaSyDf3B_dwb63mDr6XcOegsBbPDrh2HFha54",
  authDomain: "sympo-17.firebaseapp.com",
  databaseURL: "https://sympo-17-default-rtdb.firebaseio.com",
  projectId: "sympo-17",
  storageBucket: "sympo-17.appspot.com",
  messagingSenderId: "509796472330",
  appId: "1:509796472330:web:f18ecf350799d2514671f3",
  measurementId: "G-FMM91C7YVS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var contactFormDB=firebase.database().ref("contactForm");


document.getElementById('contactForm').addEventListener('submit',submitForm);
function submitForm(e){
    e.preventDefault();
    var name=getElementVal('name');
    var emailid=getElementVal('emailId');
    var msgContent=getElementVal('msgContent');
    saveMessages(name,emailid,msgContent);
    
}


const saveMessages=(name,emailid,msgContent) =>{
    var newContactForm=contactFormDB.push();

    newContactForm.set({
        name : name,
        emailid:emailid,
        msgContent:msgContent,
    });
}

const getElementVal=(id)=>{
    return document.getElementById(id).value;
};