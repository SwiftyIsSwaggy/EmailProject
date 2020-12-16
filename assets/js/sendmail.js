function sendEmail() { 
    Email.send({ 
      Host: "smtp.gmail.com", 
      Username: document.getElementById("senderEm").innerText, 
      Password: document.getElementById("senderPwd").innerText, 
      To: document.getElementById("receverEm").innerText, 
      From: document.getElementById("senderEm").innerText, 
      Subject: "Email Sent using JS, Panguy", 
      Body: document.getElementById("emailCont").textContent, 
    }) 
      .then(function (message) { 
        alert("mail sent successfully") 
      }); 
  } 