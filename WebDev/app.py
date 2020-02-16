import pyrebase


config = {
    "apiKey": "AIzaSyBzzXn8XRQmgqVUXMO65NhLwkYNblD3fwk",
    "authDomain": "calgaryhacks2020-9356d.firebaseapp.com",
    "databaseURL": "https://calgaryhacks2020-9356d.firebaseio.com",
    "projectId": "calgaryhacks2020-9356d",
    "storageBucket": "calgaryhacks2020-9356d.appspot.com",
    "messagingSenderId": "193596888881",
    "appId": "1:193596888881:web:8ad91fd31133a48ec4c210",
    "measurementId": "G-PR305S62G1"
}

firebase = pyrebase.initialize_app(config)

db = firebase.database()
