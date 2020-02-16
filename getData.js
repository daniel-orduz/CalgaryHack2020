console.log(1111)

// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
apiKey: "AIzaSyBzzXn8XRQmgqVUXMO65NhLwkYNblD3fwk",
authDomain: "calgaryhacks2020-9356d.firebaseapp.com",
databaseURL: "https://calgaryhacks2020-9356d.firebaseio.com",
storageBucket: "calgaryhacks2020-9356d.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
// var database = firebase.database();
console.log(1112)
var ref = firebase.database().ref("CLASSES/");

ref.on("value", function(snapshot) {
    data = snapshot.val();
    console.log(data);
}, function (error) {
   console.log("Error: " + error.code);
});