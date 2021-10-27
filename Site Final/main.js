//initialize firebase
var config = {
    apiKey: "AIzaSyBcqIhLPNyDbh-HgN7KfhOLt_ZV0Ad0-TY",
    authDomain: "contactform-63f82.firebaseapp.com",
    databaseURL: "https://contactform-63f82-default-rtdb.firebaseio.com",
    projectId: "contactform-63f82",
    storageBucket: "contactform-63f82.appspot.com",
    messagingSenderId: "920358872980"
  };
    firebase.initializeApp(config);

//reference messages collection
var messagesRef = firebase.database().ref("messages");

// listen for form subimit
document.getElementById('contactForm').addEventListener('submit', submitForm); 

//get date
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

console.log(dateTime)

//submit form
function submitForm(e){
    e.preventDefault();
    
    //get values
    var name = getInputVal('name');
    var Email = getInputVal('Email');
    var message = getInputVal('message');


    var camponome = document.getElementById("name").value;
    var campoemail = document.getElementById("Email").value;
    var campomessage = document.getElementById("message").value;

    if (camponome == "" || camponome.length < 1 || !isNaN(camponome))
    {
        alert("O campo nome é obrigatório")
        document.feijao.name.focus();
        document.getElementById("name").value = "";
    }

    if (campoemail == "" || campoemail.length < 1 || !isNaN(campoemail))
    {
        alert("O campo email é obrigatório")
        document.feijao.name.focus();
        document.getElementById("email").value = "";
    }

    if (campomessage == "" || campomessage.length < 1 || !isNaN(campomessage))
    {
        alert("O campo mensagem é obrigatório")
        document.feijao.message.focus();
        document.getElementById("mensagem").value = "";
    }

    else {
        saveMessage(name, Email, message)
        alert("Seu email foi enviado com sucesso")
    }   

    
}

//function to get form values
function getInputVal(id){   
    return document.getElementById(id).value;
}

//save the message to firebase
function saveMessage(name, Email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name, 
        email: Email, 
        mensagem: message,
        dataMensagem: dateTime

    });

}

