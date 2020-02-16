classes = [];

var firebaseConfig = {
    apiKey: "AIzaSyBzzXn8XRQmgqVUXMO65NhLwkYNblD3fwk",
    authDomain: "calgaryhacks2020-9356d.firebaseapp.com",
    databaseURL: "https://calgaryhacks2020-9356d.firebaseio.com",
    projectId: "calgaryhacks2020-9356d",
    storageBucket: "calgaryhacks2020-9356d.appspot.com",
    messagingSenderId: "193596888881",
    appId: "1:193596888881:web:8ad91fd31133a48ec4c210",
    measurementId: "G-PR305S62G1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ref = firebase.database().ref('/CLASSES')
ref.on('value', (snapshot) => {
    console.log(snapshot.val()['CPSC231'])
})

btn = document.getElementsByClassName("classes");
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener("click", killMe);
    
}

function killMe(){
    classes.push(this.innerHTML);
    console.log(classes)
}