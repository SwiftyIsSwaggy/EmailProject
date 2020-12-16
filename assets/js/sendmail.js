function sendEmail() { 
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
      }); 
  } 
function cancel(){
  document.getElementById("senderEm").value="";
  document.getElementById("senderPwd").value="";
  document.getElementById("receverEm").value=""; 
  document.getElementById("emailCont").value="";
}