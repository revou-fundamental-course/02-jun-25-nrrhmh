document.getElementById("messageForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const message = document.getElementById("messageText").value;
  
    const currentTime = new Date().toLocaleString();
  
    document.getElementById("currentTime").textContent = currentTime;
    document.getElementById("outputName").textContent = name;
    document.getElementById("outputDob").textContent = dob;
    document.getElementById("outputGender").textContent = gender;
    document.getElementById("outputMessage").textContent = message;
  });
  
