
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDcBTp_fsK-kXz-DXCYOc3JxGlqU8unAck",
    authDomain: "communityplus-33de0.firebaseapp.com",
    databaseURL: "https://communityplus-33de0.firebaseio.com",
    projectId: "communityplus-33de0",
    storageBucket: "communityplus-33de0.appspot.com",
    messagingSenderId: "816992198120"
  };
  firebase.initializeApp(config);

// referencce messages collection

var messagesRef= firebase.database().ref('messages');

document.getElementById('contact').addEventListener('submit', submitForm);


function submitForm(e){
  e.preventDefault();

  // get values

  var name= getInputVal('name');
  var email= getInputVal('email');
  var phone= getInputVal('phone');
  var answerone= getInputVal('answerone');
  var answertwo= getInputVal('answertwo');
  var answerthree= getInputVal('answerthree');

 saveMesssage(name,email,phone,answerone,answertwo,answerthree);
 //show alert
document.querySelector('.alert').style.display='block';
//hide alert after 3 secons
setTimeout(function(){
  document.querySelector('.alert').style.display='none';
},3000);
document.getElementById('contact').reset();

}


}

// function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

//save the message to firebase
function saveMesssage(name,email,phone,answerone,answertwo,answerthree){
  var newMessageRef=messagesRef.push();
  newMessageRef.set({
    name:name,
    email:email,
    phone:phone,
    answerone:answerone,
    answertwo:answertwo,
    answerthree:answerthree

  });
}
