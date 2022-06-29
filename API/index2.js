console.log("Joe");

document.getElementById("load").innerHTML = "Hello World!";

//JQuery Ajax functions
//LOAD
//$(selector).load(URL,data,callback);
// $("#load").load("https://reqres.in/api/users?page2",function(responseTxt, statusTxt, xhr){
//     if(statusTxt == "success")
//       alert("External content loaded successfully! " + xhr.status);
//     if(statusTxt == "error")
//       alert("Error: " + xhr.status + ": " + xhr.statusText);
//   });

  //GET
  //always use ready to wait for data to be retrieve b4 display
  $("#get").ready(function () {
    $.get("https://reqres.in/api/users?page2",function(data,status){
      data.data.forEach((dt) => {
        let sentence = `email: ${dt.email}.`;
        console.log(sentence);
      });
      // alert("GET data: "+ data.data[2].email + " status: " + status);
    });
  });

//POST
//based on post tab in reqres site
$("#post").ready(function(){
    $.post("https://reqres.in/api/register",
    {
      email: "eve.holt@reqres.in",
    password: "pistol"
    },
    function(data,status){
      alert("Data: " + JSON.stringify(data) + "\nStatus: " + status);
    });

});

  console.log("DONE");