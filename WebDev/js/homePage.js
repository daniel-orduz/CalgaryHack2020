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

ref = firebase.database().ref('/CLASSES');
ref.on('value', (snapshot) => {
    console.log(snapshot.val()['CPSC231'])
});

let names200 = ["CPSC203",
    "CPSC217",
    "CPSC219",
    "CPSC231",
    "CPSC233",
    "CPSC235"];

let names300 = ["CPSC313",
    "CPSC319",
    "CPSC329",
    "CPSC331",
    "CPSC335",
    "CPSC355",
    "CPSC359",
    "CPSC399"];

let names400 = ["CPSC405",
    "CPSC409",
    "CPSC411",
    "CPSC413",
    "CPSC418",
    "CPSC433",
    "CPSC441",
    "CPSC449",
    "CPSC453",
    "CPSC457",
    "CPSC461",
    "CPSC471",
    "CPSC481",
    "CPSC491",
    "CPSC499"];

let names500 = ["CPSC501",
    "CPSC502",
    "CPSC503",
    "CPSC511",
    "CPSC513",
    "CPSC517",
    "CPSC518",
    "CPSC519",
    "CPSC521",
    "CPSC522",
    "CPSC525",
    "CPSC526",
    "CPSC527",
    "CPSC528",
    "CPSC530",
    "CPSC531",
    "CPSC535",
    "CPSC550",
    "CPSC559",
    "CPSC561",
    "CPSC565",
    "CPSC567",
    "CPSC568",
    "CPSC571",
    "CPSC572",
    "CPSC575",
    "CPSC577",
    "CPSC581",
    "CPSC583",
    "CPSC584",
    "CPSC585",
    "CPSC587",
    "CPSC589",
    "CPSC591",
    "CPSC594",
    "CPSC598",
    "CPSC599"];

let names600 = ["CPSC601",
    "CPSC605",
    "CPSC607",
    "CPSC609",
    "CPSC610",
    "CPSC611",
    "CPSC615",
    "CPSC617",
    "CPSC619",
    "CPSC622",
    "CPSC625",
    "CPSC626",
    "CPSC627",
    "CPSC628",
    "CPSC629",
    "CPSC630",
    "CPSC635",
    "CPSC641",
    "CPSC643",
    "CPSC653",
    "CPSC657",
    "CPSC661",
    "CPSC662",
    "CPSC667",
    "CPSC669",
    "CPSC671",
    "CPSC672",
    "CPSC673",
    "CPSC675",
    "CPSC681",
    "CPSC683",
    "CPSC687",
    "CPSC689",
    "CPSC691",
    "CPSC695",
    "CPSC696",
    "CPSC697",
    "CPSC698",
    "CPSC699"];

let names700 = ["CPSC701",
    "CPSC767",
    "CPSC771",
    "CPSC781",
    "CPSC785",
    "CPSC789"];

for(let i = 0; i < names200.length; i++) {
    let elem = document.createElement("hello");
    elem.type = "button";
    elem.className = "classes";
    elem.innerHTML = names200[i];
    twohundo = document.getElementById('200');
    twohundo.append(elem);
}

for(let i = 0; i < names300.length; i++) {
    let elem = document.createElement("hello");
    elem.type = "button";
    elem.className = "classes";
    elem.innerHTML = names300[i];
    threehundo = document.getElementById('300');
    threehundo.append(elem);
}

for(let i = 0; i < names400.length; i++) {
    let elem = document.createElement("hello");
    elem.type = "button";
    elem.className = "classes";
    elem.innerHTML = names400[i];
    fourhundo = document.getElementById('400');
    fourhundo.append(elem);
}

for(let i = 0; i < names500.length; i++) {
    let elem = document.createElement("hello");
    elem.type = "button";
    elem.className = "classes";
    elem.innerHTML = names500[i];
    fivehundo = document.getElementById('500');
    fivehundo.append(elem);
}

for(let i = 0; i < names600.length; i++) {
    let elem = document.createElement("hello");
    elem.type = "button";
    elem.className = "classes";
    elem.innerHTML = names600[i];
    sixhundo = document.getElementById('600');
    sixhundo.append(elem);
}

for(let i = 0; i < names700.length; i++) {
    let elem = document.createElement("hello");
    elem.type = "button";
    elem.className = "classes";
    elem.innerHTML = names700[i];
    sevenhundo = document.getElementById('700');
    sevenhundo.append(elem);
}

btn = document.getElementsByClassName("classes");
for ( let i = 0; i < btn.length; i++ ){
    btn[i].addEventListener("click", addToTaken);
}

confirmbtn = document.getElementById("confirm-button");
confirmbtn.addEventListener("click", compare);

function compare(){
    for(let i=0;i<classes.length;i++){
        console.log("you're fucking stupid murtaza");
    }
}

function addToTaken(){
    classes.push(this.innerHTML);
    console.log(classes)
}


a = document.getElementsByClassName("displayChooser");
for(let i=0;i<a.length;i++) {
    a[i].addEventListener("click", displayCourses)
}

function displayCourses(p1) {
    b = document.getElementsByClassName(p1);
    for(let i=0; i<b.length; i++) {
        if (b[i].style.display === "none") {
            b[i].style.display = "grid";
            b[i].style.gridTemplateColumns = "repeat(4, 200px)";
            b[i].style.gridAutoRows = "minmax(50,250)";
            b[i].style.gridRowGap = "10px";
            b[i].style.gridColumnGap = "10px";
        } else {
            b[i].style.display = "none";
        }

        console.log(b[i].innerHTML)
    }
}
