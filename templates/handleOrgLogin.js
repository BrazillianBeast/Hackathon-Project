function getOrgRegister() 
{
    // alert("hello")
    document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
  // alert("I am here") 
  let username= document.getElementById("username").value;
  let orgname = document.querySelector("#orgName").value;
  let address = document.getElementById("address").value;
  let password = document.getElementById("password").value;
  console.log("Data received")
  console.log(username)
  console.log(orgname)
  console.log(address)
  console.log(password)

  alert(`Registration successful ${orgname}`)
  
  window.location.href = "./organization-main.html";
  document.getElementById("username").value = ""
  document.querySelector("#orgName").value = ""
  document.getElementById("address").value = ""
  document.getElementById("password").value = ""




})}