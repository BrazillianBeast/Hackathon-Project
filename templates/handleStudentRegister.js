function getRegister() 
{
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
  // alert("I am here") 
  let student_name= document.getElementById("username").value;
  let student_last_name= document.querySelector("#firstName").value;
  let username = document.getElementById("lastName").value;
  let password = document.getElementById("password").value;
  console.log("Data received")
  console.log(student_name)
  console.log(student_last_name)
  console.log(username)
  console.log(password)
  alert(`Register made with sucess ${student_name}`)
  document.getElementById("username").value = ""
  document.querySelector("#firstName").value = ""
  document.getElementById("lastName").value = ""
  document.getElementById("password").value = ""


  window.location.href = "./student-main.html";
})}