function sendEmail() { 
    var sender =document.getElementById("senderEm").value;
    if (sender.includes("@gmail.com")){
      Email.send({ 
        Host: "smtp.gmail.com", 
        Username: document.getElementById("senderEm").value, 
        Password: document.getElementById("senderPwd").value, 
        To: document.getElementById("receverEm").value, 
        From: document.getElementById("senderEm").value, 
        Subject: "Email Sent using JS, Panguy", 
        Body: document.getElementById("emailCont").value, 
      }) 
        .then(function (message) { 
          alert("mail sent successfully") 
          document.getElementById("senderEm").value="";
          document.getElementById("senderPwd").value="";
          document.getElementById("receverEm").value=""; 
          document.getElementById("emailCont").value="";
        }); 
    } 
    else{
      alert("Only @gmail.com accounts allowed")
      document.getElementById("senderEm").value="";
      document.getElementById("senderPwd").value="";
      document.getElementById("receverEm").value=""; 
      document.getElementById("emailCont").value="";
    }

  } 
function cancel(){
  document.getElementById("senderEm").value="";
  document.getElementById("senderPwd").value="";
  document.getElementById("receverEm").value=""; 
  document.getElementById("emailCont").value="";
}